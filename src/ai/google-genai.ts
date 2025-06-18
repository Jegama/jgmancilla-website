import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Streams content from Gemini using the generateContentStream API.
 * Returns an async generator yielding text chunks as they are produced.
 * Usage example:
 *   for await (const chunk of generateGeminiContentStream(prompt)) {
 *     console.log(chunk);
 *   }
 */
export async function* generateGeminiContentStream(prompt: string): AsyncGenerator<string, void, unknown> {
  const stream = await ai.models.generateContentStream({
    model: "gemini-2.5-flash-preview-05-20",
    contents: prompt,
  });
  for await (const chunk of stream) {
    if (chunk.text) {
      yield chunk.text;
    }
  }
}
