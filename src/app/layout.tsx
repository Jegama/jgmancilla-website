import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'JGMancilla',
  description: 'Personal portfolio website for Jesus Mancilla, Staff Quant UX Researcher, Machine Learning and NLP specialist.',
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Google Fonts link for Inter is handled by next/font */}
      </head>
      <body className={cn('font-body antialiased flex flex-col min-h-screen', inter.variable)}>
        <Header />
        <main className="flex-grow flex flex-col pt-10 sm:pt-20"> {/* Adjust pt to match header height */}
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
