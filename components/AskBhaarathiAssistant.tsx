'use client';

import { useState } from 'react';
import {
  Sparkles,
  Send,
  MessageSquare,
  X,
  Bot,
  ShieldCheck,
  ChevronRight,
  RefreshCw,
  HelpCircle
} from 'lucide-react';

interface AskBhaarathiAssistantProps {
  embedded?: boolean;
}

export default function AskBhaarathiAssistant({ embedded = false }: AskBhaarathiAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [conversation, setConversation] = useState<
    { role: 'user' | 'assistant'; text: string; disclaimer?: string }[]
  >([
    {
      role: 'assistant',
      text: 'Greetings. I am the executive intelligence assistant for Prof. Bhaarathi Ilango. I am strictly grounded in verified public records, institutional frameworks, and verified engagements. How may I assist your inquiry today?'
    }
  ]);

  const promptSuggestions = [
    'What is the 4-Readiness Level Model?',
    'What is the status of the JB Group engagement?',
    'Tell me about ACTIEV and venture building',
    'What are the career impact metrics?',
    'How do I engage Prof. Bhaarathi for advisory?'
  ];

  const handleAsk = async (textToAsk?: string) => {
    const q = textToAsk || query;
    if (!q.trim() || loading) return;

    const userMessage = q.trim();
    setQuery('');
    setConversation((prev) => [...prev, { role: 'user', text: userMessage }]);
    setLoading(true);

    try {
      const res = await fetch('/api/ask-bhaarathi', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setConversation((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: data.answer,
            disclaimer: data.disclaimer
          }
        ]);
      } else {
        setConversation((prev) => [
          ...prev,
          {
            role: 'assistant',
            text: 'I am unable to retrieve that information at this moment. For strategic inquiries, please contact Prof. Bhaarathi’s executive office directly via the Strategic Engagement Desk below.'
          }
        ]);
      }
    } catch (err) {
      setConversation((prev) => [
        ...prev,
        {
          role: 'assistant',
          text: 'Network communication interrupted. Please explore the portfolio or submit an enquiry via the engagement desk.'
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const containerContent = (
    <div className="flex flex-col h-full space-y-4">
      {/* Assistant Header */}
      <div className="flex items-center justify-between pb-3 border-b border-gold/20">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-gold/20 border border-gold/40 flex items-center justify-center text-gold">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-serif text-sm font-bold text-ivory">Ask Bhaarathi AI</h4>
            <div className="flex items-center space-x-1 text-[10px] text-gold/80 font-mono">
              <ShieldCheck className="w-3 h-3 text-gold" />
              <span>Grounded in Approved Records</span>
            </div>
          </div>
        </div>

        {!embedded && (
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 rounded-lg bg-[#171C25] hover:bg-[#232A37] text-ivory/60 hover:text-ivory"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Conversation Stream */}
      <div className="flex-1 overflow-y-auto space-y-3 pr-1 text-xs max-h-72 sm:max-h-80">
        {conversation.map((msg, i) => (
          <div
            key={i}
            className={`p-3.5 rounded-2xl ${
              msg.role === 'user'
                ? 'bg-gold/15 border border-gold/30 text-ivory ml-6'
                : 'bg-[#101827] border border-ivory/10 text-ivory/90 mr-4 space-y-1'
            }`}
          >
            <div className="text-[10px] font-mono text-gold/70 uppercase tracking-widest mb-1">
              {msg.role === 'user' ? 'Visitor Inquiry' : 'Prof. Bhaarathi Intelligence'}
            </div>
            <div className="whitespace-pre-line leading-relaxed">{msg.text}</div>
            {msg.disclaimer && (
              <div className="pt-2 mt-2 border-t border-ivory/10 text-[9px] text-ivory/40 italic">
                {msg.disclaimer}
              </div>
            )}
          </div>
        ))}
        {loading && (
          <div className="p-3 rounded-2xl bg-[#101827] border border-gold/20 text-gold flex items-center space-x-2 text-xs">
            <RefreshCw className="w-3.5 h-3.5 animate-spin" />
            <span>Consulting verified executive dossier...</span>
          </div>
        )}
      </div>

      {/* Prompt Suggestions */}
      <div className="space-y-1.5 pt-1">
        <div className="text-[10px] font-mono text-gold/60 uppercase tracking-wider">
          Suggested Queries:
        </div>
        <div className="flex flex-wrap gap-1.5">
          {promptSuggestions.map((prompt, pIdx) => (
            <button
              key={pIdx}
              type="button"
              onClick={() => handleAsk(prompt)}
              className="text-[10px] px-2.5 py-1 rounded-lg bg-[#171C25] hover:bg-gold/15 text-ivory/80 hover:text-gold border border-gold/15 transition text-left"
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* Input Bar */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAsk();
        }}
        className="flex items-center space-x-2 pt-2 border-t border-gold/20"
      >
        <input
          type="text"
          placeholder="Ask about ventures, methodology, advisory..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          className="flex-1 p-2.5 bg-[#101827] border border-gold/25 rounded-xl text-xs text-ivory placeholder-ivory/40 outline-none focus:border-gold transition"
        />
        <button
          type="submit"
          disabled={loading || !query.trim()}
          className="p-2.5 rounded-xl bg-gold text-[#0A0F1D] font-bold disabled:opacity-50 hover:bg-gold-light transition"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );

  if (embedded) {
    return (
      <div className="p-6 rounded-3xl bg-gradient-to-b from-[#171C25] to-[#101827] border border-gold/30 shadow-2xl h-full flex flex-col justify-between">
        {containerContent}
      </div>
    );
  }

  return (
    <>
      {/* Floating Trigger Button */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center space-x-2.5 px-4 py-3 rounded-2xl bg-gradient-to-r from-gold via-gold-light to-gold text-[#0A0F1D] font-bold text-xs uppercase tracking-wider shadow-gold-lg hover:scale-105 transition duration-300"
          >
            <Sparkles className="w-4 h-4" />
            <span className="hidden sm:inline">Ask Bhaarathi AI</span>
          </button>
        )}
      </div>

      {/* Floating Dialog Drawer */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-full max-w-sm sm:max-w-md p-6 rounded-3xl bg-[#0A0F1D]/98 backdrop-blur-xl border border-gold/40 shadow-2xl animate-in slide-in-from-bottom-5 duration-300">
          {containerContent}
        </div>
      )}
    </>
  );
}
