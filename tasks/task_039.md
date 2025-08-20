# Task 39: Implement New Chat Functionality

**Status:** pending
**Priority:** medium

**Dependencies:** 38

## Description
Add the ability for users to start a new chat while preserving previous conversations.

## Details
1. Create a NewChatButton component:
```typescript
// components/NewChatButton.tsx
import { useRouter } from 'next/navigation';

export default function NewChatButton() {
  const router = useRouter();
  
  const handleNewChat = () => {
    router.push('/');
  };
  
  return (
    <button
      onClick={handleNewChat}
      className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
      New Chat
    </button>
  );
}
```
2. Create a chat list component to show previous chats:
```typescript
// components/ChatList.tsx
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';
import Link from 'next/link';

export default function ChatList() {
  const [chats, setChats] = useState([]);
  
  useEffect(() => {
    const fetchChats = async () => {
      const { data, error } = await supabase
        .from('chat_sessions')
        .select('*')
        .order('updated_at', { ascending: false });
        
      if (!error && data) {
        setChats(data);
      }
    };
    
    fetchChats();
    
    // Subscribe to changes
    const subscription = supabase
      .channel('chat_sessions')
      .on('postgres_changes', { event: '*', schema: 'public', table: 'chat_sessions' }, fetchChats)
      .subscribe();
      
    return () => {
      subscription.unsubscribe();
    };
  }, []);
  
  return (
    <div className="space-y-2">
      <NewChatButton />
      <div className="mt-4 space-y-1">
        {chats.map(chat => (
          <Link
            key={chat.id}
            href={`/chat/${chat.id}`}
            className="block p-2 rounded-md hover:bg-gray-100 truncate"
          >
            {chat.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
```
3. Update the main layout to include the chat list:
```typescript
// app/layout.tsx
import ChatList from '@/components/ChatList';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex h-screen">
          <div className="w-64 p-4 border-r">
            <ChatList />
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
```
4. Create dynamic routes for chat sessions:
```typescript
// app/chat/[id]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import ChatContainer from '@/components/ChatContainer';
import Header from '@/components/Header';

export default function ChatPage() {
  const { id } = useParams();
  
  return (
    <main className="flex flex-col h-screen">
      <Header />
      <ChatContainer chatId={id} />
    </main>
  );
}
```
5. Update the ChatContainer to accept a chatId prop and pass it to the useChat hook

## Test Strategy
1. Test creating a new chat from the UI
2. Verify chat list updates when new chats are created
3. Test navigation between existing chats
4. Validate chat history loads correctly when selecting a chat
5. Test URL routing for chat sessions
6. Verify real-time updates to the chat list
7. Test behavior when a chat session is deleted or becomes invalid

