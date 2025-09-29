import type { Metadata } from 'next';

// Centralized site-wide SEO / social metadata.
export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.jgmancilla.com/'),
  title: {
    default: 'Jesús Mancilla — Applied Scientist & Quantitative UX Researcher',
    template: '%s | Jesús Mancilla'
  },
  description: 'Applied scientist & Quantitative UX Researcher bridging HCI and ML/LLMs. I design evaluation-driven AI systems—vector databases, retrieval (RAG) pipelines, autonomous agents, evaluation/observability, and survey NLP—with measurable impact at scale.',
  openGraph: {
    title: 'Jesús Mancilla — Applied Scientist & Quantitative UX Researcher',
    description: 'Human-centered AI, NLP/LLMs, and scalable systems: RAG retrieval pipelines, autonomous agents, evaluation/observability. Projects: Modular Survey Analysis, Research Librarian, Customer Support Bot; publications in ACM/AutoUI/IJDSA.',
    url: 'https://www.jgmancilla.com/',
    siteName: 'Jesús Mancilla',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jesús Mancilla — Applied Scientist & Quantitative UX Researcher'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Mancilla — Applied Scientist & Quantitative UX Researcher',
    description: 'Human-centered AI, NLP/LLMs, and scalable systems: RAG retrieval pipelines, autonomous agents, evaluation/observability. Projects: Modular Survey Analysis, Research Librarian, Customer Support Bot; publications in ACM/AutoUI/IJDSA.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: ['Applied Scientist','Quantitative UX Researcher','HCAI','NLP','LLMs','RAG','Agents','Evaluation','Observability','Vector Databases','Retrieval Pipelines','Autonomous Agents','Jesús Mancilla','Jesus Mancilla','Jesus Garcia-Mancilla','Jesus Garcia Mancilla'],
  robots: { index: true, follow: true }
};

export default siteMetadata;
