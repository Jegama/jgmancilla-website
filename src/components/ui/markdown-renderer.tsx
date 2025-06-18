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
    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-xl font-bold" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-lg font-bold" {...props} />,
    h4: ({ node, ...props }) => <h4 className="text-base font-bold" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc list-inside" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-inside" {...props} />,
    li: ({ node, ...props }) => <li className="text-sm" {...props} />,
    a: ({ node, ...props }) => {
      if (props.href?.startsWith('/')) {
        return <Link href={props.href} {...props} className="text-primary hover:underline" />;
      } else {
        return <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />;
      }
    },
    p: ({ node, ...props }) => <p className="text-sm" {...props} />,
  };

  return (
    <div className={cn('max-w-none break-words', className)}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
