# Task 36: Implement Text Streaming Functionality

**Status:** pending
**Priority:** medium

**Dependencies:** 35

## Description
Add real-time streaming of AI responses as they're generated to enhance the user experience.

## Details
1. Modify the API route to support streaming:
```typescript
// app/api/chat/stream/route.ts
import { OpenAI } from 'openai';
import { NextRequest } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  
  const stream = await openai.chat.completions.create({
    model: 'gpt-4.1-nano-2025-04-14',
    messages,
    stream: true
  });
  
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  
  const readableStream = new ReadableStream({
    async start(controller) {
      for await (const chunk of stream) {
        const content = chunk.choices[0]?.delta?.content || '';
        controller.enqueue(encoder.encode(`data: ${JSON.stringify({ content })}\n\n`));
      }
      controller.enqueue(encoder.encode('data: [DONE]\n\n'));
      controller.close();
    }
  });
  
  return new Response(readableStream, {
    headers: {
      'Content-Type': 'text/event-stream',
      'Cache-Control': 'no-cache',
      'Connection': 'keep-alive'
    }
  });
}
```
2. Update the chat hook to handle streaming responses:
```typescript
// hooks/useChat.ts
import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [streamingMessage, setStreamingMessage] = useState('');
  
  const sendMessage = async (content) => {
    // Add user message
    setIsLoading(true);
    setStreamingMessage('');
    
    const response = await fetch('/api/chat/stream', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messages: [...messages, { role: 'user', content }] })
    });
    
    if (!response.ok) {
      setIsLoading(false);
      return;
    }
    
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      
      const chunk = decoder.decode(value);
      const lines = chunk.split('\n\n').filter(line => line.startsWith('data: '));
      
      for (const line of lines) {
        const data = line.replace('data: ', '');
        if (data === '[DONE]') continue;
        
        try {
          const { content } = JSON.parse(data);
          setStreamingMessage(prev => prev + content);
        } catch (e) {
          console.error('Error parsing stream data', e);
        }
      }
    }
    
    // Add complete AI message to state
    setMessages(prev => [...prev, { role: 'assistant', content: streamingMessage }]);
    setStreamingMessage('');
    setIsLoading(false);
  };
  
  return { messages, isLoading, streamingMessage, sendMessage };
}
```
3. Update the chat UI to display streaming text in real-time

## Test Strategy
1. Test streaming API endpoint with various message lengths
2. Verify chunks are properly decoded and displayed
3. Test error handling during streaming
4. Validate the UI updates in real-time as chunks arrive
5. Test performance with long responses
6. Verify stream properly closes when complete
7. Test behavior when connection is interrupted

