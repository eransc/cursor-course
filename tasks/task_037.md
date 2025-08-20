# Task 37: Implement Image Generation Mode

**Status:** pending
**Priority:** medium

**Dependencies:** 35, 34

## Description
Add functionality to generate images using OpenAI's gpt-image-1 model and implement a toggle to switch between text and image modes.

## Details
1. Create API route for image generation:
```typescript
// app/api/image/route.ts
import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();
  
  try {
    const response = await openai.images.generate({
      model: 'gpt-image-1',
      prompt,
      n: 1,
      size: '1024x1024'
    });
    
    return NextResponse.json({ url: response.data[0].url });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
}
```
2. Create a mode toggle component:
```typescript
// components/ModeToggle.tsx
import { useState } from 'react';

export default function ModeToggle({ mode, setMode }) {
  return (
    <div className="flex items-center space-x-2">
      <button
        className={`px-3 py-1 rounded ${mode === 'text' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setMode('text')}
      >
        Text
      </button>
      <button
        className={`px-3 py-1 rounded ${mode === 'image' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        onClick={() => setMode('image')}
      >
        Image
      </button>
    </div>
  );
}
```
3. Update the chat hook to handle image generation:
```typescript
// hooks/useChat.ts
export function useChat() {
  // ... existing code
  const [mode, setMode] = useState('text');
  
  const sendMessage = async (content) => {
    // Add user message
    const userMessage = { role: 'user', content, type: mode };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    if (mode === 'text') {
      // Existing text chat logic
    } else if (mode === 'image') {
      try {
        const response = await fetch('/api/image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt: content })
        });
        
        const data = await response.json();
        
        if (response.ok) {
          setMessages(prev => [...prev, {
            role: 'assistant',
            content: 'Image generated based on your prompt',
            type: 'image',
            image_url: data.url
          }]);
        } else {
          // Handle error
        }
      } catch (error) {
        // Handle error
      } finally {
        setIsLoading(false);
      }
    }
  };
  
  return { messages, isLoading, streamingMessage, mode, setMode, sendMessage };
}
```
4. Update the ChatMessage component to display images:
```typescript
// components/ChatMessage.tsx
export default function ChatMessage({ message }) {
  return (
    <div className={`message ${message.role === 'user' ? 'user' : 'assistant'}`}>
      {message.type === 'image' && message.image_url ? (
        <div>
          <p>{message.content}</p>
          <img src={message.image_url} alt="Generated image" className="mt-2 rounded-lg max-w-full" />
        </div>
      ) : (
        <p>{message.content}</p>
      )}
    </div>
  );
}
```
5. Add visual indicators in the UI to show the current active mode

## Test Strategy
1. Test image generation API with various prompts
2. Verify correct model (gpt-image-1) is being used
3. Test mode toggle functionality
4. Validate image display in the chat interface
5. Test error handling for failed image generation
6. Verify proper storage of image URLs in the message history
7. Test UI indicators for active mode

