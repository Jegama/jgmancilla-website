import { GoogleGenAI, ThinkingLevel } from "@google/genai";

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  throw new Error("GEMINI_API_KEY is not set in environment variables");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

/**
 * Streams content from Gemini using the generateContentStream API.
 * Returns an async generator yielding text chunks as they are produced.
 */
export async function* generateGeminiContentStream(prompt: string): AsyncGenerator<string, void, unknown> {
  const stream = await ai.models.generateContentStream({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      thinkingConfig: {
        thinkingLevel: ThinkingLevel.LOW,
      }
    },

  });
  for await (const chunk of stream) {
    if (chunk.text) {
      yield chunk.text;
    }
  }
}
