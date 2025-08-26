import type { Metadata } from 'next';

// Centralized site-wide SEO / social metadata.
export const siteMetadata: Metadata = {
  metadataBase: new URL('https://www.jgmancilla.com/'),
  title: {
    default: 'Jesús Mancilla — Applied Research Scientist & Research Engineer',
    template: '%s | Jesús Mancilla'
  },
  description: 'Applied research scientist & research engineer bridging HCI and ML/NLP. I design evaluation-driven LLM systems—RAG pipelines, autonomous agents, and survey NLP—and deliver peer-reviewed, production-grade impact across consumer and enterprise products.',
  openGraph: {
    title: 'Jesús Mancilla — Applied Research Scientist & Research Engineer',
    description: 'Human-centered AI, NLP/LLMs, and scalable systems. Projects include Modular Survey Analysis, Research Librarian, Customer Support Bot, and Calvinist Parrot; publications in ACM/AutoUI/IJDSA.',
    url: 'https://www.jgmancilla.com/',
    siteName: 'Jesús Mancilla',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jesús Mancilla — Applied Research Scientist & Research Engineer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jesús Mancilla — Applied Research Scientist & Research Engineer',
    description: 'Human-centered AI, NLP/LLMs, and scalable systems. Projects include Modular Survey Analysis, Research Librarian, Customer Support Bot, and Calvinist Parrot; publications in ACM/AutoUI/IJDSA.',
    images: ['/og-image.png']
  },
  icons: {
    icon: '/favicon.ico'
  },
  keywords: ['Applied Research Scientist','Research Engineer','HCAI','NLP','LLMs','RAG','Agents','Evaluation','Jesús Mancilla'],
  robots: { index: true, follow: true }
};

export default siteMetadata;
