# Task 40: Error Handling and Loading States

**Status:** pending
**Priority:** medium

**Dependencies:** 35, 36, 37, 38, 39

## Description
Implement comprehensive error handling and loading states throughout the application to improve user experience.

## Details
1. Create reusable error and loading components:
```typescript
// components/ErrorMessage.tsx
export default function ErrorMessage({ message }) {
  return (
    <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
      <p className="font-medium">Error</p>
      <p>{message}</p>
    </div>
  );
}

// components/LoadingSpinner.tsx
export default function LoadingSpinner() {
  return (
    <div className="flex justify-center items-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
    </div>
  );
}
```
2. Add error handling to API routes:
```typescript
// app/api/chat/route.ts
export async function POST(req: NextRequest) {
  try {
    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Invalid request format' },
        { status: 400 }
      );
    }
    
    // Existing code...
  } catch (error) {
    console.error('Chat API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
```
3. Update the chat hook with error handling:
```typescript
// hooks/useChat.ts
export function useChat(chatId = null) {
  // ... existing state
  const [error, setError] = useState(null);
  
  // Reset error when starting new operations
  const resetError = () => setError(null);
  
  const sendMessage = async (content) => {
    resetError();
    setIsLoading(true);
    
    try {
      // Existing code...
    } catch (err) {
      setError(err.message || 'Failed to send message');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  };
  
  // Add error handling to useEffect hooks
  
  return { 
    // ... existing return values
    error,
    resetError
  };
}
```
4. Add loading states to UI components:
```typescript
// components/ChatInput.tsx
export default function ChatInput({ onSendMessage, isLoading, mode }) {
  // ... existing code
  
  return (
    <div className="relative">
      <textarea
        disabled={isLoading}
        // ... other props
      />
      <button
        disabled={isLoading || !input.trim()}
        // ... other props
      >
        {isLoading ? <LoadingSpinner /> : 'Send'}
      </button>
    </div>
  );
}

// components/ChatContainer.tsx
export default function ChatContainer({ chatId }) {
  const { messages, isLoading, error, streamingMessage, sendMessage } = useChat(chatId);
  
  return (
    <div className="flex-1 overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        
        {streamingMessage && (
          <ChatMessage message={{ role: 'assistant', content: streamingMessage }} />
        )}
        
        {isLoading && !streamingMessage && <LoadingSpinner />}
        
        {error && <ErrorMessage message={error} />}
      </div>
      
      <ChatInput onSendMessage={sendMessage} isLoading={isLoading} />
    </div>
  );
}
```
5. Add error boundaries for component-level error handling:
```typescript
// components/ErrorBoundary.tsx
'use client';

import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Component error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md text-red-600">
          <h2 className="text-lg font-bold">Something went wrong</h2>
          <p>{this.state.error?.message || 'Unknown error'}</p>
          <button
            className="mt-2 px-4 py-2 bg-red-600 text-white rounded-md"
            onClick={() => this.setState({ hasError: false, error: null })}
          >
            Try again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
```

## Test Strategy
1. Test error handling for API failures
2. Verify loading indicators appear at appropriate times
3. Test error boundary recovery
4. Validate form validation error handling
5. Test network error scenarios
6. Verify error messages are clear and actionable
7. Test recovery paths after errors
8. Validate disabled states during loading
9. Test error logging functionality

