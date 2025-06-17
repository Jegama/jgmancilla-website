import React from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Define a specific type for the code component props
// This helps with type safety for the custom code renderer.
type CodeComponentProps = React.ComponentPropsWithoutRef<'code'> & {
  node?: any;
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
};

export function MarkdownRenderer({ content, className }: MarkdownRendererProps) {
  const components: Components = {
    h1: ({ node, ...props }) => <h1 className="text-2xl font-bold mb-4" {...props} />,
    h2: ({ node, ...props }) => <h2 className="text-xl font-bold mb-3" {...props} />,
    h3: ({ node, ...props }) => <h3 className="text-lg font-bold mb-2" {...props} />,
    ul: ({ node, ...props }) => <ul className="list-disc list-inside" {...props} />,
    ol: ({ node, ...props }) => <ol className="list-decimal list-inside" {...props} />,
    li: ({ node, ...props }) => <li className="mb-1" {...props} />,
    a: ({ node, ...props }) => {
      if (props.href?.startsWith('/')) {
        return <Link href={props.href} {...props} className="text-primary hover:underline" />;
      } else {
        return <a {...props} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline" />;
      }
    },
    p: ({ node, ...props }) => <p className="mb-4 last:mb-0" {...props} />,
    code: ({ node, inline, className, children, ...props }: CodeComponentProps) => {
      const match = /language-(\w+)/.exec(className || '');
      return !inline ? (
        <pre className="bg-muted p-2 rounded-md overflow-x-auto">
          <code className={cn(className, 'text-muted-foreground')} {...props}>
            {children}
          </code>
        </pre>
      ) : (
        <code className={cn(className, 'bg-muted text-muted-foreground rounded-sm px-1')} {...props}>
          {children}
        </code>
      );
    },
  };

  return (
    <div className={cn('max-w-none break-words', className)}>
      <ReactMarkdown components={components}>{content}</ReactMarkdown>
    </div>
  );
}
