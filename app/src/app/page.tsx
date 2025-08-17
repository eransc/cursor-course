"use client";
import React from "react";

// Message type definition
type Message = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
};

// Message component with design.json styling
function Message({ content, role }: { content: string; role: Message['role'] }) {
  const isUser = role === 'user';
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`max-w-[80%] px-4 py-3 rounded-xl ${
          isUser
            ? 'bg-accent-purple text-white rounded-br-md'
            : 'bg-secondary-dark text-primary-dark border border-default-dark rounded-bl-md'
        } transition-all duration-200 ease-in-out`}
        style={{
          fontSize: '0.875rem',
          fontWeight: 400,
          lineHeight: 1.5
        }}
      >
        {content}
      </div>
    </div>
  );
}

// Hero Section Component
function HeroSection() {
  return (
    <div className="text-center py-12 px-4">
      <h1 
        className="text-primary-dark mb-4"
        style={{
          fontSize: '2.5rem',
          fontWeight: 600,
          lineHeight: 1.25
        }}
      >
        AI-Powered Chat & Image Generation
      </h1>
      <p 
        className="text-secondary-dark max-w-2xl mx-auto mb-8"
        style={{
          fontSize: '1.125rem',
          lineHeight: 1.75
        }}
      >
        Experience seamless conversations with advanced AI models and generate stunning images with simple text prompts. Switch between chat and image modes effortlessly.
      </p>
      <div className="flex justify-center gap-4">
        <button 
          className="bg-accent-purple hover:bg-accent-purple-light text-white transition-all duration-200 ease-in-out hover:scale-105"
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Start Chatting
        </button>
        <button 
          className="bg-hover-dark hover:bg-secondary-dark text-white border border-default-dark hover:border-hover-dark transition-all duration-200 ease-in-out"
          style={{
            padding: '0.75rem 1.5rem',
            borderRadius: '0.75rem',
            fontSize: '0.875rem',
            fontWeight: 500
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default function ChatDemoPage() {
  // State for messages and input
  const [messages, setMessages] = React.useState<Message[]>([
    { id: '1', content: 'Hello! How can I help you today? I can chat with you or generate images based on your descriptions.', role: 'assistant' },
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
        content: mode === 'image' 
          ? 'I would generate an image based on your description. Image generation will be implemented in the next phase.' 
          : 'This is a mock response. Full AI integration will be added in the next development phase.',
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
    <div className="flex flex-col h-screen bg-primary-dark">
      {/* Hero Section - Only show when no messages or initial message */}
      {messages.length <= 1 && <HeroSection />}
      
      {/* Chat Container */}
      <div className="flex-1 flex flex-col max-w-6xl mx-auto w-full">
        {/* Message list container with fixed height and scrolling */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
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
        <div className="border-t border-default-dark bg-secondary-dark">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div 
              className="relative flex items-center bg-secondary-dark border border-default-dark hover:border-hover-dark transition-all duration-200 ease-in-out"
              style={{
                borderRadius: '0.75rem',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            >
              {/* Attachment button */}
              <button 
                className="p-3 text-secondary-dark hover:text-accent-purple transition-all duration-200 ease-in-out"
                aria-label="Attach file"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
                </svg>
              </button>

              {/* Input field */}
              <input
                type="text"
                placeholder={mode === 'image' ? 'Describe the image you want to generate...' : 'Type a message...'}
                className="flex-1 px-4 py-3 bg-transparent focus:outline-none text-primary-dark placeholder-text-muted-dark"
                style={{
                  fontSize: '0.875rem'
                }}
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
              />

              {/* Action buttons */}
              <div className="flex items-center gap-2 px-3">
                {/* Mode toggle buttons */}
                <div className="flex items-center gap-1">
                  <button 
                    className={`p-2 flex items-center gap-2 rounded-lg transition-all duration-200 ease-in-out ${
                      mode === 'image' 
                        ? 'text-accent-purple bg-hover-dark' 
                        : 'text-secondary-dark hover:text-accent-purple hover:bg-hover-dark'
                    }`}
                    onClick={() => setMode('image')}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <circle cx="8.5" cy="8.5" r="1.5" />
                      <path d="M21 15l-5-5L5 21" />
                    </svg>
                    <span className="hidden sm:inline">Image</span>
                  </button>

                  <button 
                    className={`p-2 flex items-center gap-2 rounded-lg transition-all duration-200 ease-in-out ${
                      mode === 'chat' 
                        ? 'text-accent-purple bg-hover-dark' 
                        : 'text-secondary-dark hover:text-accent-purple hover:bg-hover-dark'
                    }`}
                    onClick={() => setMode('chat')}
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 500
                    }}
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
                    </svg>
                    <span className="hidden sm:inline">Chat</span>
                  </button>
                </div>

                {/* Send button */}
                <button
                  onClick={handleSendMessage}
                  disabled={!inputValue.trim()}
                  className="bg-accent-purple hover:bg-accent-purple-light disabled:bg-hover-dark disabled:text-text-muted-dark text-white p-2 rounded-lg transition-all duration-200 ease-in-out disabled:cursor-not-allowed"
                  aria-label="Send message"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22,2 15,22 11,13 2,9" />
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Model info */}
            <div className="flex justify-center mt-3">
              <div 
                className="flex items-center gap-2 px-3 py-1.5 bg-hover-dark rounded-full border border-default-dark"
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 500
                }}
              >
                <div className="w-2 h-2 bg-accent-purple rounded-full"></div>
                <span className="text-secondary-dark">
                  {mode === 'image' ? 'Image Generation Mode' : 'GPT-4o nano'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
