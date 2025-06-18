// src/ai/flows/answer-questions-about-me.ts
'use server';
/**
 * @fileOverview An AI agent that answers questions about Jesus Mancilla's work based on website content.
 *
 * - answerQuestionsAboutMe - A function that handles the question answering process.
 * - AnswerQuestionsAboutMeInput - The input type for the answerQuestionsAboutMe function.
 * - AnswerQuestionsAboutMeOutput - The return type for the answerQuestionsAboutMe function.
 */

import { z } from "zod";
import { generateGeminiContent } from "@/ai/google-genai";

const AnswerQuestionsAboutMeInputSchema = z.object({
  question: z.string().describe('The question to answer about Jesus Mancilla.'),
  resume: z.string().describe('Jesus Mancilla\'s resume content. Cite this as [1](/resume) when used.'),
  mlPortfolio: z.string().describe('Jesus Mancilla\'s ML portfolio content. Cite this as [2](/ml-portfolio) when used.'),
  researchPortfolio: z.string().describe('Jesus Mancilla\'s research portfolio content. Cite this as [3](/research-portfolio) when used.'),
  researchPapers: z.string().describe('Jesus Mancilla\'s research papers content. Cite this as [4](/research-papers) when used.'),
});
export type AnswerQuestionsAboutMeInput = z.infer<typeof AnswerQuestionsAboutMeInputSchema>;

const AnswerQuestionsAboutMeOutputSchema = z.object({
  answer: z.string().describe('The answer to the question about Jesus Mancilla, with Markdown citations if applicable.'),
});
export type AnswerQuestionsAboutMeOutput = z.infer<typeof AnswerQuestionsAboutMeOutputSchema>;

export async function answerQuestionsAboutMe(input: AnswerQuestionsAboutMeInput): Promise<AnswerQuestionsAboutMeOutput> {
  const prompt = `You are a professional AI representative for Jesus Mancilla, a talented and experienced professional in his field. Your primary goal is to assist recruiters and potential employers by providing accurate, insightful, and compelling answers about his work, skills, and experience.

  Your tone should be professional, confident, and positive. Frame your answers to highlight Jesus Mancilla's strengths and accomplishments.

  Use the following information from his website to answer the question. Synthesize information from different sections when it creates a more complete and impressive picture of his qualifications.
  If the answer is not contained in the data, respond that you do not know in a polite and professional manner.

  When you use information from a specific section, you MUST cite it using Markdown link format. This is crucial for credibility and allowing users to verify the information.
  - Information from the Resume section should be cited as: [1](/resume)
  - Information from the ML Portfolio section should be cited as: [2](/ml-portfolio)
  - Information from the Research Portfolio section should be cited as: [3](/research-portfolio)
  - Information from the Research Papers section should be cited as: [4](/research-papers)

  For example, if discussing experience from the resume and a project from the ML portfolio, the answer might look like:
  "Jesus Mancilla has demonstrated significant expertise as a Senior Quant UX Researcher ([1](/resume)). A great example of his work is the innovative Research Librarian Project, which showcases his skills in machine learning ([2](/ml-portfolio))."

  Ensure citations are placed directly after the relevant piece of information.

  Here is the information to use:
  Resume: ${input.resume}
  ML Portfolio: ${input.mlPortfolio}
  Research Portfolio: ${input.researchPortfolio}
  Research Papers: ${input.researchPapers}

  Question: ${input.question}`;

  const answer = await generateGeminiContent(prompt);
  return { answer };
}

