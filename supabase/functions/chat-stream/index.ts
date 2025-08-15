import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import OpenAI from "openai";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: Deno.env.get('OPENAI_API_KEY'),
});

Deno.serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    if (req.method !== 'POST') {
      throw new Error('Method not allowed');
    }

    const { messages } = await req.json();

    // Create chat completion with streaming
    const stream = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages,
      stream: true,
    });

    // Create a TransformStream for streaming the response
    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    // Process the stream
    (async () => {
      try {
        for await (const chunk of stream) {
          const content = chunk.choices[0]?.delta?.content || '';
          if (content) {
            const data = JSON.stringify({ content }) + '\n';
            await writer.write(encoder.encode(`data: ${data}`));
          }
        }
      } catch (error) {
        console.error('Stream processing error:', error);
        const errorData = JSON.stringify({ error: 'Stream processing failed' }) + '\n';
        await writer.write(encoder.encode(`data: ${errorData}`));
      } finally {
        await writer.close();
      }
    })();

    // Return the response with appropriate headers
    return new Response(readable, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});