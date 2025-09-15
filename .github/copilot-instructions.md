# AI Assistant Instructions for this Repository

These scoped guidelines help AI coding agents work effectively in this project. Keep answers concise, cite concrete files, and follow the existing patterns.

## 1. Purpose & High-Level Architecture
Personal CV + AI portfolio built with **Next.js App Router + TypeScript + Tailwind**. Core feature: a streaming AI chat that answers questions about Jesús Mancilla using ONLY site-derived content.

Key layers:
- `src/lib/*-content.ts`: Canonical structured content (resume, ML portfolio, research, papers). Treat as the single source of truth for AI grounding.
- `src/lib/content-data.ts`: Re-exports content modules for convenient bulk import.
- `src/ai/flows/answer-questions-about-me.ts`: Constructs a strict prompt with citation rules and streams model output (async generator).
- `src/ai/google-genai.ts`: Thin abstraction over `@google/genai` streaming API (model: `gemini-2.5-flash-lite-preview-06-17`).
- `src/app/api/chat/route.ts`: Next.js Edge/serverless route; validates request body and pipes the generator into a `ReadableStream`.
- `src/components/home/ai-chat.tsx`: Client component managing localStorage‑persisted chat state, optimistic user message insertion, and incremental streaming UI updates.
- UI primitives in `src/components/ui/` wrap Radix + Tailwind; keep additions consistent (export a single `ComponentName` with Tailwind variants via `cn` and optional `className`).

## 2. Data & Flow (AI Chat)
1. User enters question in `AIChat`.
2. Client POSTs to `/api/chat` sending raw text of all content sources (already serialized via helper getters like `getResumeTextForAI`).
3. API constructs streaming response from `answerQuestionsAboutMeStream`.
4. That generator builds a single composite prompt (NOT multi-turn) and yields chunks from Gemini.
5. Client accumulates chunks and updates the matching bot message in place.

Keep the single-prompt, single-pass architecture unless a refactor explicitly introduces retrieval or multi-step reasoning. Never leak prompt rules to the user.

## 3. Environment & Secrets
- Requires `GEMINI_API_KEY` in env; `google-genai.ts` hard-fails on missing key.
- Local dev: create `.env` (not committed) with `GEMINI_API_KEY=...` before `npm run dev`.

## 4. Dev Workflows
Scripts (`package.json`):
- `npm run dev` → Next dev (Turbopack) on port 9002
- `npm run build` → Production build (TypeScript & ESLint errors ignored per `next.config.ts` → be extra vigilant manually!)
- `npm run lint` / `npm run typecheck` for quality gates (do this proactively; build will not block on errors).

When adding types/content, run `npm run typecheck` to catch regressions—don’t rely on CI.

## 5. Conventions & Patterns
- Type Safety: Zod schemas colocated with stream logic (see `AnswerQuestionsAboutMeInputSchema`). Mirror this pattern for new AI flows.
- Streaming: Expose async generator functions (`async function* ...`) and consume via `for await` in API routes.
- Citations: Prompt enforces numbered inline citations `[1](/resume)` etc.; any new knowledge source must define a deterministic citation label pattern and be injected into the prompt template.
- Content Structure: Large textual domains live as exportable objects (nested headings, arrays) in `src/lib/*`; getters (see `content-data.ts` imports) flatten/serialize for AI usage—extend similarly.
- UI State Persistence: Chat messages + metadata versioned via `aiWelcomeMessageVersion`. When content/prompt semantics change, bump version to reset cached sessions.
- Styling: Tailwind utility classes; shared helper `cn` in `src/lib/utils.ts`.
- Edge Safety: Minimal validation in `route.ts`; if expanding API, add explicit schema validation before streaming.

## 6. Adding a New AI Flow (Example)
1. Create `src/ai/flows/<name>.ts` with: zod schema, prompt template, `async function* <name>Stream(input)` calling `generateGeminiContentStream`.
2. Add an API route under `src/app/api/<name>/route.ts` wrapping the stream into a `ReadableStream`.
3. Create/extend a client component to consume the endpoint using the same streaming pattern as `AIChat`.
4. If new content source: add a `src/lib/<domain>-content.ts` file; export via `content-data.ts`; implement a `get<Domain>TextForAI()` helper (follow existing naming).
5. Define citation tag(s) and update the prompt template; ensure deterministic mapping.

## 7. Error Handling & Edge Cases
- Missing required POST fields → 400 (`route.ts`). Expand with schema validation if inputs grow.
- Stream errors are caught and sent via `controller.error`; client replaces in-progress message with fallback error text.
- Avoid partial state corruption in localStorage by wrapping JSON.parse in try/catch (already done).

## 8. Performance Notes
- Single large prompt currently sends full serialized content each question (simple, but not scalable). If size grows, introduce retrieval (embeddings + chunking) before hitting model limits.
- Streaming granularity comes from Gemini chunks—don’t buffer artificially; flush immediately.

## 9. Safe Modification Checklist (Before PR)
- Zod schema updated (if input shape changes)
- Prompt citations still accurate & exhaustive
- `aiWelcomeMessageVersion` bumped if semantics of chat behavior change
- `npm run typecheck` passes
- Manual chat test: ask for an out-of-scope question to confirm refusal behavior

## 10. Non-Goals / Avoid
- Don’t add speculative multi-agent orchestration here (Calvinist Parrot described in content, not implemented in this repo).
- Don’t invent external URLs or cite unseen data—prompt contract must hold.
- Don’t suppress thrown error on missing `GEMINI_API_KEY`.

## 11. Future Improvements (If Requested)
- Introduce retrieval layer (vector db) to trim prompt size.
- Add schema validation in API routes (reuse zod schema). 
- Add unit tests for prompt assembly and citation enforcement.

Keep responses lean, grounded in existing content, and maintain citation integrity.
