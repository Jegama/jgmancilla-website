import Link from 'next/link';
import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 border-t">
      <div className="container-max flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm mb-4 md:mb-0">
          &copy; {new Date().getFullYear()} Jesus Mancilla. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <Link href="https://linkedin.com/in/placeholder" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="hover:text-accent transition-colors">
            <Linkedin className="h-6 w-6" />
          </Link>
          <Link href="https://github.com/placeholder" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile" className="hover:text-accent transition-colors">
            <Github className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
