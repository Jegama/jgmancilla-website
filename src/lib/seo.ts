import type { Metadata } from 'next';

// Centralized site-wide SEO / social metadata.
export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.jgmancilla.com/'),
  title: {
    default: 'Jesús Mancilla — Senior Applied Scientist & Quantitative UX Researcher',
    template: '%s | Jesús Mancilla'
  },
  description: 'Senior Applied Scientist & Quantitative UX Researcher (ex-Meta, Roku). Bridging HCI and AI to build evaluation benchmark suites, human-in-the-loop scoring, and GenAI Quality Systems. Interact with my AI agent to explore my work in RAG, Multi-Agent Orchestration, and LLM-as-a-judge pipelines.',
  openGraph: {
    title: 'Jesús Mancilla — Senior Applied Scientist & Quantitative UX Researcher',
    description: 'Senior Applied Scientist & Quantitative UX Researcher (ex-Meta, Roku). Bridging HCI and AI to build evaluation benchmark suites, human-in-the-loop scoring, and GenAI Quality Systems. Interact with my AI agent to explore my work in RAG, Multi-Agent Orchestration, and LLM-as-a-judge pipelines.',
    url: 'https://www.jgmancilla.com/',
    siteName: 'Jesús Mancilla',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jesús Mancilla — Senior Applied Scientist & Quantitative UX Researcher'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Mancilla — Senior Applied Scientist & Quantitative UX Researcher',
    description: 'Senior Applied Scientist & Quantitative UX Researcher (ex-Meta, Roku). Bridging HCI and AI to build evaluation benchmark suites, human-in-the-loop scoring, and GenAI Quality Systems. Interact with my AI agent to explore my work in RAG, Multi-Agent Orchestration, and LLM-as-a-judge pipelines.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'Jesús Mancilla',
    'Jesus Mancilla',
    'Jesus Garcia-Mancilla',
    'Jesus Garcia Mancilla',
    'Jesús Garcia Mancilla',
    'Jesús Mancilla Portfolio',
    'Jesús Mancilla Quantitative UX Researcher',
    'Jesús Mancilla Applied Scientist',
    'Jesús Mancilla AI Researcher',
    'Jesús Mancilla UX Researcher',
    'Jesús Mancilla Quant UXR',
    'Jesús Mancilla Meta',
    'Jesús Mancilla Roku'
  ],
  robots: { index: true, follow: true }
};

export default siteMetadata;
