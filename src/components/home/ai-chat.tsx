'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Send, Loader2, User, Bot } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { answerQuestionsAboutMe } from '@/ai/flows/answer-questions-about-me';
import { 
  aiWelcomeMessage, 
  getResumeTextForAI,
  getMlPortfolioTextForAI,
  getResearchPortfolioTextForAI,
  getResearchPapersTextForAI
} from '@/lib/content-data';
import { cn } from '@/lib/utils';

type Message = {
  id: string;
  sender: 'user' | 'bot';
  text: string | React.ReactNode;
};

export function AIChat() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', sender: 'bot', text: aiWelcomeMessage },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isPending, startTransition] = useTransition();
  const { toast } = useToast();
  const scrollAreaRef = useRef<HTMLDivElement>(null);

  const resumeData = getResumeTextForAI();
  const mlPortfolioData = getMlPortfolioTextForAI();
  const researchPortfolioData = getResearchPortfolioTextForAI();
  const researchPapersData = getResearchPapersTextForAI();

  const scrollToBottom = () => {
    if (scrollAreaRef.current) {
      const viewport = scrollAreaRef.current.querySelector('div[data-radix-scroll-area-viewport]');
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || isPending) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: inputValue,
    };
    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue('');

    startTransition(async () => {
      try {
        const response = await answerQuestionsAboutMe({
          question: inputValue,
          resume: resumeData,
          mlPortfolio: mlPortfolioData,
          researchPortfolio: researchPortfolioData,
          researchPapers: researchPapersData,
        });
        
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: response.answer,
        };
        setMessages((prevMessages) => [...prevMessages, botMessage]);
      } catch (error) {
        console.error('AI Chat Error:', error);
        const errorMessage: Message = {
          id: (Date.now() + 1).toString(),
          sender: 'bot',
          text: "Sorry, I encountered an error. Please try again.",
        };
        setMessages((prevMessages) => [...prevMessages, errorMessage]);
        toast({
          title: 'Error',
          description: 'Failed to get response from AI. Please check the console for details.',
          variant: 'destructive',
        });
      }
    });
  };
  
  // Helper to render message text, potentially with links
  const renderMessageText = (text: string | React.ReactNode) => {
    if (typeof text !== 'string') {
      return text;
    }
    // Basic URL detection, can be expanded
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return text.split(urlRegex).map((part, index) => {
      if (part.match(urlRegex)) {
        return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">{part}</a>;
      }
      return part;
    });
  };


  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full max-h-[70vh] rounded-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-headline text-primary">AI Representative</CardTitle>
        <p className="text-sm text-muted-foreground">Ask a question about my work</p>
      </CardHeader>
      <CardContent className="flex-grow flex flex-col overflow-hidden p-4">
        <ScrollArea className="flex-grow mb-4 pr-4" ref={scrollAreaRef}>
          <div className="space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn(
                  'flex items-end space-x-2',
                  message.sender === 'user' ? 'justify-end' : 'justify-start'
                )}
              >
                {message.sender === 'bot' && (
                  <Avatar className="h-8 w-8 self-start">
                    <AvatarFallback><Bot size={18} /></AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={cn(
                    'max-w-[75%] rounded-lg px-4 py-2 shadow',
                    message.sender === 'user'
                      ? 'bg-accent text-accent-foreground'
                      : 'bg-secondary text-secondary-foreground'
                  )}
                >
                  <p className="text-sm whitespace-pre-wrap break-words">{renderMessageText(message.text)}</p>
                </div>
                 {message.sender === 'user' && (
                  <Avatar className="h-8 w-8 self-start">
                    <AvatarFallback><User size={18} /></AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
        <form onSubmit={handleSubmit} className="flex items-center space-x-2 border-t pt-4">
          <Input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your question..."
            className="flex-grow"
            aria-label="Chat input"
            disabled={isPending}
          />
          <Button type="submit" size="icon" disabled={isPending || !inputValue.trim()} aria-label="Send message">
            {isPending ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
