'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

const quickQuestions = [
  "Tell me about your AI projects",
  "What are your skills?",
  "What's your experience?",
  "How can I contact you?",
];

const responses: Record<string, string> = {
  default: "I'm an AI assistant representing Nagalinga. I can answer questions about his projects, skills, experience, and achievements.",
  "ai projects": "Nagalinga built: 1) FairHire AI - bias detection using Gemini, 2) Skill Ladder - AI career platform with resume parsing, 3) Agent Eval Lab - multi-agent test generation.",
  "skills": "His stack includes: AI/ML (PyTorch, TensorFlow, LangChain, LLMs), Backend (Node.js, Express, FastAPI, Flask), Frontend (React, Next.js), Databases (PostgreSQL, MongoDB), and Tools (Docker, Git, Power BI).",
  "experience": "B.Tech CSE student at Kalasalingam University (CGPA 7.65). Won 1st place at KARE Open Source Hackathon 2025. Completed internships at Techolution (Generative AI) and published research through Springer Nature.",
  "contact": "Email: nagakuchivaripalli@gmail.com, LinkedIn: linkedin.com/in/nagalinga-k, GitHub: github.com/linga-1221. Open to opportunities!",
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: responses.default },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getAIResponse = (userMessage: string) => {
    const lower = userMessage.toLowerCase();
    if (lower.includes('project') || lower.includes('ai')) return responses['ai projects'];
    if (lower.includes('skill') || lower.includes('tech') || lower.includes('stack')) return responses.skills;
    if (lower.includes('experience') || lower.includes('work') || lower.includes('journey')) return responses.experience;
    if (lower.includes('contact') || lower.includes('email') || lower.includes('hire')) return responses.contact;
    return responses.default;
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getAIResponse(input) }]);
      setIsTyping(false);
    }, 1200);
  };

  const handleQuick = (question: string) => {
    setMessages(prev => [...prev, { role: 'user', content: question }]);
    setIsTyping(true);
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'assistant', content: getAIResponse(question) }]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id='ai-assistant' className='py-32 px-6 bg-background'>
      <div className='max-w-7xl mx-auto'>
        <div className='mb-12 text-center'>
          <span className='text-xs font-bold tracking-[0.3em] uppercase text-primary-500'>AI Assistant</span>
          <h2 className='text-5xl md:text-7xl font-bold text-text-primary mt-4'>Ask Me Anything</h2>
          <p className='text-text-secondary mt-4 max-w-2xl mx-auto'>
            An AI assistant that can answer questions about Nagalinga's projects, skills, experience, and achievements.
          </p>
        </div>

        <div className='flex justify-center'>
          <div className='relative w-full max-w-2xl'>
            <AnimatePresence>
              {!isOpen && (
                <motion.button
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  onClick={() => setIsOpen(true)}
                  className='fixed bottom-8 right-8 w-20 h-20 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center shadow-glow-lg z-50'
                  aria-label='Open AI Assistant'
                >
                  <Bot size={32} className='text-white' />
                </motion.button>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  className='fixed bottom-24 right-8 w-full sm:w-96 glass-card shadow-2xl z-40 overflow-hidden flex flex-col max-h-[500px]'
                >
                  <div className='bg-gradient-to-r from-primary-500 to-secondary-500 p-4 flex items-center justify-between'>
                    <div className='flex items-center gap-3'>
                      <Bot size={24} className='text-white' />
                      <span className='font-semibold text-white'>AI Assistant</span>
                    </div>
                    <button onClick={() => setIsOpen(false)} className='text-white hover:opacity-80'>
                      <X size={20} />
                    </button>
                  </div>

                  <div className='flex-1 overflow-y-auto p-4 space-y-4'>
                    {messages.map((msg, idx) => (
                      <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <div
                          className={`max-w-[80%] p-3 rounded-2xl ${
                            msg.role === 'user'
                              ? 'bg-primary-500/20 text-text-primary border border-primary-500/30'
                              : 'bg-secondary-500/20 text-text-primary border border-secondary-500/30'
                          }`}
                        >
                          <p className='text-sm'>{msg.content}</p>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className='flex items-center gap-2 text-text-secondary text-sm'>
                        <Bot size={16} />
                        <span>Assistant is typing...</span>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className='px-4 py-2 border-t border-white/10 flex gap-2 overflow-x-auto'>
                    {quickQuestions.slice(0, 2).map((q) => (
                      <button
                        key={q}
                        onClick={() => handleQuick(q)}
                        className='whitespace-nowrap text-xs px-3 py-1.5 rounded-full bg-primary-500/10 text-primary-500 border border-primary-500/20 hover:bg-primary-500/20 transition-colors'
                      >
                        {q}
                      </button>
                    ))}
                  </div>

                  <div className='p-4 border-t border-white/10 flex gap-2'>
                    <input
                      type='text'
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                      placeholder='Ask about Nagalinga...'
                      className='flex-1 px-4 py-2 text-sm bg-background text-text-primary border border-white/10 rounded-full focus:outline-none focus:border-primary-500 transition-colors'
                    />
                    <button onClick={handleSend} disabled={!input.trim()} className='p-2 rounded-full bg-primary-500 text-white disabled:opacity-50 hover:bg-primary-600 transition-colors'>
                      <Send size={16} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
