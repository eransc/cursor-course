# Task 38: Implement Message Storage in Supabase

**Status:** pending
**Priority:** medium

**Dependencies:** 33, 35, 37

## Description
Store chat messages and sessions in Supabase to persist conversations and enable the new chat functionality.

## Details
1. Create a service for Supabase interactions:
```typescript
// lib/supabaseService.ts
import { supabase } from './supabase';

export async function createChatSession(title: string) {
  const { data, error } = await supabase
    .from('chat_sessions')
    .insert({ title })
    .select()
    .single();
    
  if (error) throw error;
  return data;
}

export async function saveChatMessage(message: {
  chat_id: string;
  role: 'user' | 'assistant';
  content: string;
  type: 'text' | 'image';
  image_url?: string;
}) {
  const { data, error } = await supabase
    .from('chat_messages')
    .insert(message)
    .select()
    .single();
    
  if (error) throw error;
  return data;
}

export async function getChatSession(id: string) {
  const { data: session, error: sessionError } = await supabase
    .from('chat_sessions')
    .select('*')
    .eq('id', id)
    .single();
    
  if (sessionError) throw sessionError;
  
  const { data: messages, error: messagesError } = await supabase
    .from('chat_messages')
    .select('*')
    .eq('chat_id', id)
    .order('created_at', { ascending: true });
    
  if (messagesError) throw messagesError;
  
  return { session, messages };
}
```
2. Update the chat hook to use Supabase for storage:
```typescript
// hooks/useChat.ts
import { useState, useEffect } from 'react';
import { createChatSession, saveChatMessage, getChatSession } from '@/lib/supabaseService';

export function useChat(chatId = null) {
  const [messages, setMessages] = useState([]);
  const [session, setSession] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  // ... other state
  
  useEffect(() => {
    if (chatId) {
      // Load existing chat
      const loadChat = async () => {
        try {
          const { session, messages } = await getChatSession(chatId);
          setSession(session);
          setMessages(messages);
        } catch (error) {
          console.error('Failed to load chat', error);
        }
      };
      
      loadChat();
    } else if (!session) {
      // Create new session for new chat
      const createSession = async () => {
        try {
          const newSession = await createChatSession('New Chat');
          setSession(newSession);
        } catch (error) {
          console.error('Failed to create chat session', error);
        }
      };
      
      createSession();
    }
  }, [chatId]);
  
  const sendMessage = async (content) => {
    // ... existing code for sending messages
    
    // Save user message to Supabase
    if (session) {
      await saveChatMessage({
        chat_id: session.id,
        role: 'user',
        content,
        type: mode
      });
      
      // After receiving AI response, save it too
      // For text mode
      await saveChatMessage({
        chat_id: session.id,
        role: 'assistant',
        content: aiResponseContent,
        type: 'text'
      });
      
      // For image mode
      await saveChatMessage({
        chat_id: session.id,
        role: 'assistant',
        content: 'Image generated based on your prompt',
        type: 'image',
        image_url: imageUrl
      });
    }
  };
  
  return { 
    messages, 
    isLoading, 
    streamingMessage, 
    mode, 
    setMode, 
    sendMessage,
    session
  };
}
```

## Test Strategy
1. Test creating new chat sessions in Supabase
2. Verify message storage for both text and image types
3. Test retrieving complete chat history
4. Validate error handling for database operations
5. Test concurrent operations and race conditions
6. Verify data integrity between application state and database
7. Test performance with large chat histories

