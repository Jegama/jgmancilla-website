import { NextRequest } from 'next/server';
import { answerQuestionsAboutMeStream } from '@/ai/flows/answer-questions-about-me';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { question, resume, mlPortfolio, researchPortfolio, researchPapers } = body;

    // Validate required fields
    if (!question || !resume || !mlPortfolio || !researchPortfolio || !researchPapers) {
      return new Response('Missing required fields', { status: 400 });
    }

    const encoder = new TextEncoder();
    
    const stream = new ReadableStream({
      async start(controller) {
        try {
          for await (const chunk of answerQuestionsAboutMeStream({
            question,
            resume,
            mlPortfolio,
            researchPortfolio,
            researchPapers,
          })) {
            const encoded = encoder.encode(chunk);
            controller.enqueue(encoded);
          }
          controller.close();
        } catch (error) {
          console.error('Streaming error:', error);
          controller.error(error);
        }
      }
    });

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
      },
    });
  } catch (error) {
    console.error('API route error:', error);
    return new Response('Internal server error', { status: 500 });
  }
}
