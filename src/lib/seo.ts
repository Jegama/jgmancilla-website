import type { Metadata } from 'next';

// Centralized site-wide SEO / social metadata.
export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.jgmancilla.com/'),
  title: {
    default: 'Jesús Mancilla — Lead AI Developer & Applied Scientist',
    template: '%s | Jesús Mancilla'
  },
  description: 'Lead AI Developer and applied scientist (ex-Meta, Roku). I own production AI systems end to end — autonomous pricing engines, spatial ML, RAG and multi-agent orchestration — with the evaluation rigour of a quantitative UX research background. Interact with my AI agent to explore my work.',
  openGraph: {
    title: 'Jesús Mancilla — Lead AI Developer & Applied Scientist',
    description: 'Lead AI Developer and applied scientist (ex-Meta, Roku). I own production AI systems end to end — autonomous pricing engines, spatial ML, RAG and multi-agent orchestration — with the evaluation rigour of a quantitative UX research background. Interact with my AI agent to explore my work.',
    url: 'https://www.jgmancilla.com/',
    siteName: 'Jesús Mancilla',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jesús Mancilla — Lead AI Developer & Applied Scientist'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Mancilla — Lead AI Developer & Applied Scientist',
    description: 'Lead AI Developer and applied scientist (ex-Meta, Roku). I own production AI systems end to end — autonomous pricing engines, spatial ML, RAG and multi-agent orchestration — with the evaluation rigour of a quantitative UX research background. Interact with my AI agent to explore my work.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'Jesús Mancilla',
    'Jesus Mancilla',
    'Jesus Garcia-Mancilla',
    'Jesús Garcia-Mancilla',
    'Jesus Garcia Mancilla',
    'Jesús Garcia Mancilla',
    'Jesus Mancilla Portfolio',
    'Jesus Mancilla Quantitative UX Researcher',
    'Jesus Mancilla Applied Scientist',
    'Jesus Mancilla AI Researcher',
    'Jesus Mancilla UX Researcher',
    'Jesus Mancilla Quant UXR',
    'Jesus Mancilla Meta',
    'Jesus Mancilla Roku',
    'Jesus Mancilla AnyTickets',
    'Jesus Mancilla SI Tickets',
    'Jesus Mancilla Lead AI Developer',
    'Jesus Mancilla AI Developer',
    'Jesus Mancilla Applied ML',
    'Jesus Mancilla Pricing Systems'
  ],
  robots: { index: true, follow: true }
};

export default siteMetadata;
