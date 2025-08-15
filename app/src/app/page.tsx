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
  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    // Add user message
    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: 'user',
    };
    setMessages(prev => [...prev, newMessage]);

    // Add mock assistant response
    setTimeout(() => {
      const response: Message = {
        id: (Date.now() + 1).toString(),
        content: 'This is a mock response. Backend integration will be added later.',
        role: 'assistant',
      };
      setMessages(prev => [...prev, response]);
    }, 1000);

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
