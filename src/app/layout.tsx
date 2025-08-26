import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import siteMetadata from '@/lib/seo';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = siteMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen', inter.variable)}>
        <Header />
        <main className="flex-grow flex flex-col pt-10 sm:pt-20">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
