import type { Metadata } from 'next';

// Centralized site-wide SEO / social metadata.
export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.jgmancilla.com/'),
  title: {
    default: 'Jesús Mancilla — Senior Applied Scientist & Quantitative UX Researcher',
    template: '%s | Jesús Mancilla'
  },
  description: 'Senior Applied Scientist & Quantitative UX Researcher (ex-Meta, Roku). Bridging HCI and AI to build evaluation-driven systems: RAG, Multi-Agent Orchestration, and NLP pipelines. Expert in Python, LLMs, and measuring AI impact at scale.',
  openGraph: {
    title: 'Jesús Mancilla — Senior Applied Scientist & Quantitative UX Researcher',
    description: 'Senior Applied Scientist & Quantitative UX Researcher (ex-Meta, Roku). Bridging HCI and AI to build evaluation-driven systems: RAG, Multi-Agent Orchestration, and NLP pipelines. Expert in Python, LLMs, and measuring AI impact at scale.',
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
    description: 'Senior Applied Scientist & Quantitative UX Researcher (ex-Meta, Roku). Bridging HCI and AI to build evaluation-driven systems: RAG, Multi-Agent Orchestration, and NLP pipelines. Expert in Python, LLMs, and measuring AI impact at scale.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: [
    'Applied Scientist',
    'Quantitative UX Researcher',
    'Senior User Researcher',
    'HCAI',
    'Human-Centered AI',
    'NLP',
    'LLMs',
    'Generative AI',
    'GenAI',
    'RAG',
    'Retrieval-Augmented Generation',
    'Prompt Engineering',
    'Chain-of-Thought',
    'Few-Shot Learning',
    'Embeddings',
    'Multi-Agent Systems',
    'Autonomous Agents',
    'Evaluation Pipelines',
    'Observability',
    'Vector Databases',
    'Mixed Methods',
    'Python',
    'SQL',
    'Jesús Mancilla',
    'Jesus Mancilla',
    'Jesus Garcia-Mancilla',
    'Jesus Garcia Mancilla',
    'Jesús Garcia Mancilla'
  ],
  robots: { index: true, follow: true }
};

export default siteMetadata;
