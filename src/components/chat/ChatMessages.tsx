import { Message } from '@ai-sdk/react';
import { Weather } from '../weather/weather';
import { useEffect, useRef } from 'react';
import MarkdownIt from 'markdown-it';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-python';

const md = new MarkdownIt({
  highlight: function (str, lang) {
    if (lang && Prism.languages[lang]) {
      try {
        return `<pre class="language-${lang}"><code>${Prism.highlight(str, Prism.languages[lang], lang)}</code></pre>`;
      } catch {
        return '';
      }
    }
    return ''
  }
});

interface ChatMessagesProps {
  messages: Message[];
  status: string;
}

export function ChatMessages({ messages }: ChatMessagesProps) {
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
      Prism.highlightAll();
    }
  }, [messages]);

  return (
    <div ref={chatContainerRef} className="chat-container bg-light rounded-3 p-3" style={{ height: '70vh', overflowY: 'auto' }}>
      {messages.map(message => (
        <div key={message.id} className={`d-flex ${message.role === 'user' ? 'justify-content-end' : 'justify-content-start'} mb-3`}>
          <div className={`chat-bubble p-3 rounded-3 ${
              message.role === 'user' 
              ? 'bg-primary text-white' 
              : 'bg-white shadow-sm'
          }`} style={{ maxWidth: '75%', minWidth: '200px' }}>
            <div dangerouslySetInnerHTML={{ __html: md.render(message.content) }} />
            
            {message.toolInvocations?.map(toolInvocation => {
              const { toolName, toolCallId, state } = toolInvocation;
              if (state === 'result' && toolName === 'displayWeather') {
                const { result } = toolInvocation;
                return (
                  <div key={toolCallId} className="mt-2">
                    <Weather {...result} />
                  </div>
                );
              } else if (toolName === 'displayWeather') {
                return (
                  <div key={toolCallId} className="mt-2 text-muted">
                    <div className="spinner-border spinner-border-sm me-2" role="status">
                      <span className="visually-hidden">Loading...</span>
                    </div>
                    Loading weather...
                  </div>
                );
              }
            })}
          </div>
        </div>
      ))}
    </div>
  );
}