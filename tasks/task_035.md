# Task 35: OpenAI API Integration for Text Chat

**Status:** pending
**Priority:** high

**Dependencies:** 32, 34

## Description
Implement the integration with OpenAI's GPT-4.1-nano model for text-based chat functionality.

## Details
1. Install OpenAI SDK:
```bash
npm install openai
```
2. Create API route for chat completion:
```typescript
// app/api/chat/route.ts
import { OpenAI } from 'openai';
import { NextRequest, NextResponse } from 'next/server';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

export async function POST(req: NextRequest) {
  const { messages } = await req.json();
  
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-nano-2025-04-14',
      messages,
      stream: false
    });
    
    return NextResponse.json(response.choices[0].message);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to generate response' }, { status: 500 });
  }
}
```
3. Create a hook for managing chat state and API calls:
```typescript
// hooks/useChat.ts
import { useState } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const sendMessage = async (content) => {
    // Add user message to state
    // Call API
    // Add AI response to state
  };
  
  return { messages, isLoading, sendMessage };
}
```
4. Connect the chat UI components with the chat hook

## Test Strategy
1. Test API route with various message inputs
2. Verify correct model is being used (gpt-4.1-nano-2025-04-14)
3. Test error handling for API failures
4. Validate message state management in the hook
5. Test end-to-end flow from user input to displayed response
6. Verify API key security and environment variable loading

