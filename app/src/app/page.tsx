"use client";
import React from "react";

// Message type definition
type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
};

// Message component
function Message({ content, role }: { content: string; role: Message['role'] }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-white shadow rounded-bl-none'
        }`}
      >
        {content}
      </div>
    </div>
  );
}

export default function ChatDemoPage() {
  // State for messages and input
  const [messages, setMessages] = React.useState<Message[]>([
    { id: '1', content: 'Hello! How can I help you today?', role: 'assistant' },
  ]);
  const [inputValue, setInputValue] = React.useState('');
  const [mode, setMode] = React.useState<'chat' | 'image'>('chat');

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
    };
    setMessages(prev => [...prev, newMessage]);

    try {
      if (mode === 'chat') {
        // Call chat-stream endpoint
        const response = await fetch('http://127.0.0.1:54321/functions/v1/chat-stream', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
          },
          body: JSON.stringify({
            messages: [{ role: 'user', content: inputValue }]
          })
        });

        // Handle streaming response
        const reader = response.body?.getReader();
        const decoder = new TextDecoder();
        let content = '';

        if (reader) {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            const chunk = decoder.decode(value);
            const lines = chunk.split('\n');
            
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                const data = JSON.parse(line.slice(6));
                content += data.content || '';
                
                // Update message in real-time
                setMessages(prev => {
                  const lastMessage = prev[prev.length - 1];
                  if (lastMessage.role === 'assistant') {
                    return [...prev.slice(0, -1), { ...lastMessage, content }];
                  } else {
                    return [...prev, { id: Date.now().toString(), content, role: 'assistant' }];
                  }
                });
              }
            }
          }
        }
      } else {
        // Call image-generate endpoint
        const response = await fetch('http://127.0.0.1:54321/functions/v1/image-generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
          },
          body: JSON.stringify({ prompt: inputValue })
        });

        const data = await response.json();
        setMessages(prev => [...prev, {
          id: Date.now().toString(),
          content: `![Generated Image](${data.url})`,
          role: 'assistant'
        }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        id: Date.now().toString(),
        content: 'Sorry, there was an error processing your request.',
        role: 'assistant'
      }]);
    }

    // Clear input
    setInputValue('');
  };

  // Handle input submission
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Message list container with fixed height and scrolling */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Render messages */}
          {messages.map((message) => (
            <Message
              key={message.id}
              content={message.content}
              role={message.role}
            />
          ))}
        </div>
      </div>

      {/* Fixed input section at bottom */}
      <div className="border-t bg-white">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="relative flex items-center rounded-xl border border-gray-200 bg-white shadow-sm">
            {/* Attachment button */}
            <button className="p-2 hover:text-blue-500 text-gray-500">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </button>

            {/* Input field */}
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-700"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            {/* Action buttons */}
            <div className="flex items-center gap-2 px-2">
              {/* Create image button */}
              <button 
                className={`p-2 flex items-center gap-2 ${
                  mode === 'image' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
                }`}
                onClick={() => setMode('image')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <path d="M21 15l-5-5L5 21" />
                </svg>
                <span className="text-sm">Create image</span>
              </button>

              {/* Search web button */}
              <button 
                className={`p-2 flex items-center gap-2 ${
                  mode === 'chat' ? 'text-blue-500' : 'text-gray-500 hover:text-blue-500'
                }`}
                onClick={() => setMode('chat')}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8" />
                  <path d="M21 21l-4.35-4.35" />
                </svg>
                <span className="text-sm">Search web</span>
              </button>

              {/* Model selector */}
              <div className="border-l pl-2 ml-2">
                <button className="flex items-center gap-2 px-3 py-1.5 text-sm text-gray-700 hover:bg-gray-100 rounded-md">
                  <span>OpenAI GPT-4o mini</span>
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
