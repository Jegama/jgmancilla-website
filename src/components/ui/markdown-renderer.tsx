import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const components: Components = {
    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold leading-snug" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-xl font-bold leading-snug" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-lg font-bold leading-snug" {...props} />,
    h4: ({ node, ...props }) => <h4 className="text-primary font-bold leading-snug" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc list-inside leading-snug" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-inside leading-snug" {...props} />,
    li: ({ node, ...props }) => <li className="text-primary leading-snug" {...props} />,
    a: ({ node, ...props }) => {
      if (props.href?.startsWith('/')) {
        return <Link href={props.href} {...props} className="text-accent underline leading-snug hover:opacity-80 transition-colors" />;
      } else {
        return <a {...props} target="_blank" rel="noopener noreferrer" className="text-accent underline leading-snug hover:opacity-80 transition-colors" />;
      }
    },
    p: ({ node, ...props }) => <p className="text-primary leading-snug" {...props} />,
    blockquote: ({ node, ...props }) => (
      <blockquote className="border-l-4 border-accent pl-2 italic text-muted-foreground leading-snug">
        {props.children}
      </blockquote>
    ),
  };

  return (
    <div className={cn('max-w-none break-words', className)}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
