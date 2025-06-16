// src/ai/flows/answer-questions-about-me.ts
'use server';
/**
 * @fileOverview An AI agent that answers questions about Jesus Mancilla's work based on website content.
 *
 * - answerQuestionsAboutMe - A function that handles the question answering process.
 * - AnswerQuestionsAboutMeInput - The input type for the answerQuestionsAboutMe function.
 * - AnswerQuestionsAboutMeOutput - The return type for the answerQuestionsAboutMe function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnswerQuestionsAboutMeInputSchema = z.object({
  question: z.string().describe('The question to answer about Jesus Mancilla.'),
  resume: z.string().describe('Jesus Mancilla\'s resume content.'),
  mlPortfolio: z.string().describe('Jesus Mancilla\'s ML portfolio content.'),
  researchPortfolio: z.string().describe('Jesus Mancilla\'s research portfolio content.'),
  researchPapers: z.string().describe('Jesus Mancilla\'s research papers content.'),
});
export type AnswerQuestionsAboutMeInput = z.infer<typeof AnswerQuestionsAboutMeInputSchema>;

const AnswerQuestionsAboutMeOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Jesus Mancilla.'),
});
export type AnswerQuestionsAboutMeOutput = z.infer<typeof AnswerQuestionsAboutMeOutputSchema>;

export async function answerQuestionsAboutMe(input: AnswerQuestionsAboutMeInput): Promise<AnswerQuestionsAboutMeOutput> {
  return answerQuestionsAboutMeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'answerQuestionsAboutMePrompt',
  input: {schema: AnswerQuestionsAboutMeInputSchema},
  output: {schema: AnswerQuestionsAboutMeOutputSchema},
  prompt: `You are an AI assistant trained to answer questions about Jesus Mancilla and his work.
  Use the following information from his website to answer the question.
  If the answer is not contained in the data, respond that you do not know.

  Resume: {{{resume}}}
  ML Portfolio: {{{mlPortfolio}}}
  Research Portfolio: {{{researchPortfolio}}}
  Research Papers: {{{researchPapers}}}

  Question: {{{question}}}
  `,
});

const answerQuestionsAboutMeFlow = ai.defineFlow(
  {
    name: 'answerQuestionsAboutMeFlow',
    inputSchema: AnswerQuestionsAboutMeInputSchema,
    outputSchema: AnswerQuestionsAboutMeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
