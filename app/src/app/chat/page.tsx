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
  
  // Check if content is an image URL
  const isImage = content.startsWith('![') && content.includes('](') && content.endsWith(')');
  let imageUrl = '';
  if (isImage) {
    const match = content.match(/!\[.*?\]\((.*?)\)/);
    if (match) {
      imageUrl = match[1];
    }
  }

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white rounded-br-none'
            : 'bg-white shadow rounded-bl-none'
        }`}
      >
        {isImage ? (
          <img src={imageUrl} alt="Generated" className="rounded-lg max-w-full" />
        ) : (
          content
        )}
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
  const [isLoading, setIsLoading] = React.useState(false);

  // Handle sending a message
  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    console.log('Current mode:', mode); // Debug log

    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
    };
    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    try {
      if (mode === 'chat') {
        console.log('Calling chat-stream endpoint'); // Debug log
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
        console.log('Calling image-generate endpoint'); // Debug log
        // Call image-generate endpoint
        const response = await fetch('http://127.0.0.1:54321/functions/v1/image-generate', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
          },
          body: JSON.stringify({ prompt: inputValue })
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || 'Failed to generate image');
        }

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
        content: `Sorry, there was an error: ${error.message}`,
        role: 'assistant'
      }]);
    } finally {
      setIsLoading(false);
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
            {/* Input field */}
            <input
              type="text"
              placeholder={mode === 'chat' ? "Type a message..." : "Describe the image you want to create..."}
              className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-gray-700"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
            />

            {/* Action buttons */}
            <div className="flex items-center gap-2 px-2">
              {/* Send button */}
              <button
                className="p-2 text-blue-500 hover:bg-blue-50 rounded-lg flex items-center gap-2"
                onClick={handleSendMessage}
                disabled={isLoading || !inputValue.trim()}
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 2L11 13" />
                  <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                </svg>
                <span className="text-sm">Send</span>
              </button>

              {/* Mode toggle buttons */}
              <div className="border-l pl-2">
                <div className="flex rounded-lg bg-gray-100 p-1">
                  {/* Chat button */}
                  <button 
                    className={`p-2 flex items-center gap-2 rounded-lg transition-colors ${
                      mode === 'chat' 
                        ? 'bg-white text-blue-500 shadow-sm' 
                        : 'text-gray-500 hover:text-blue-500'
                    }`}
                    onClick={() => {
                      console.log('Switching to chat mode');
                      setMode('chat');
                    }}
                    disabled={isLoading}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="11" cy="11" r="8" />
                      <path d="M21 21l-4.35-4.35" />
                    </svg>
                    <span className="text-sm">Chat</span>
                  </button>

                  {/* Create image button */}
                  <button 
                    className={`p-2 flex items-center gap-2 rounded-lg transition-colors ${
                      mode === 'image' 
                        ? 'bg-white text-blue-500 shadow-sm' 
                        : 'text-gray-500 hover:text-blue-500'
                    }`}
                    onClick={() => {
                      console.log('Switching to image mode');
                      setMode('image');
                    }}
                    disabled={isLoading}
                  >
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="text-sm">Image</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}