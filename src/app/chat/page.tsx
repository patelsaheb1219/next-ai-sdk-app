'use client';

import { useChat } from '@ai-sdk/react';
import Link from 'next/link';
import { ChatMessages } from '../../components/chat/ChatMessages';
import { ChatInput } from '../../components/chat/ChatInput';
import Navbar from '@/components/Navbar';

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit, status } = useChat();

  return (
    <main className="bg-light min-vh-100">
      <Navbar />
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 shadow-sm">
              <div className="card-body p-4">
                <ChatMessages messages={messages} status={status} />
                <ChatInput
                  input={input}
                  handleInputChange={handleInputChange}
                  handleSubmit={handleSubmit}
                  isLoading={status === "streaming"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}