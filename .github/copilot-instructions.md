## AI Agent Guide (concise)

Purpose and shape
- Personal CV + AI portfolio built with Next.js (App Router, TS, Tailwind). Core: a streaming chat that answers questions about Jesús Mancilla using only site content.
- Source of truth for the website: `src/lib/*-content.ts` (resume, ML portfolio, research, papers). Helpers like `getResumeTextForAI()` flatten for prompts and are re-exported via `src/lib/content-data.ts`. These files should stay consistent with the upstream career facts in `docs/Argus/bullet_bank.txt`.

Argus career corpus
- Folder `docs/Argus` is the upstream corpus for career materials used in an external ChatGPT project.
- `docs/Argus/bullet_bank.txt` is the canonical inventory of roles, bullets, skills, tags, metrics, and dates. When adding or editing experience/skills/impact across the site (especially in `src/lib/*-content.ts`), reuse or adapt bullets from here and do not contradict it.
- `docs/Argus/Career coach Master Prompt.md` defines the "Argus" prompt and its truth/evidence rules (no fabrication, action → method → impact bullets, metrics only when evidenced). When designing new content or AI flows that describe experience, mirror those rules rather than inventing new claims.
- Treat `docs/Argus` as upstream and the website content as a curated view; if something is unclear or missing, prefer omitting or simplifying it instead of introducing unverifiable details.

AI flow (single-pass, no RAG)
1) Client `AIChat` collects serialized content via getters and POSTs to `/api/chat` with `{ question, resume, mlPortfolio, researchPortfolio, researchPapers }`.
2) API `src/app/api/chat/route.ts` validates fields, then streams chunks from `answerQuestionsAboutMeStream` as `text/plain`.
3) Flow `src/ai/flows/answer-questions-about-me.ts` builds one composite prompt and yields text via `generateGeminiContentStream()`.
4) Model client `src/ai/google-genai.ts` wraps `@google/genai` with `model: "gemini-2.5-flash-lite-preview-06-17"`; hard-fails if `GEMINI_API_KEY` is missing.
5) UI `src/components/home/ai-chat.tsx` inserts an optimistic bot message and incrementally replaces its content as chunks arrive.

Conventions that matter
- Schema-first: collocate Zod input schema with each flow. Expose `async function*` and consume with `for await` in API routes.
- Strict citations: use labels verbatim in answers: `[1](/resume)`, `[2](/ml-portfolio)`, `[3](/research-portfolio)`, `[4](/research-papers)`; never invent URLs.
- Content serialization lives in each `src/lib/*-content.ts` (see the four `get*TextForAI()` functions) and is imported from `content-data.ts`.
- Chat state is persisted in localStorage with keys `ai-chat-messages` and `ai-chat-messages-meta`, TTL ~60 days, versioned by `aiWelcomeMessageVersion` (bump to reset sessions).
- UI primitives under `src/components/ui/*` follow Radix + Tailwind with `cn` from `src/lib/utils.ts`. Bot text renders via `MarkdownRenderer`.
- `next.config.ts` ignores TS/ESLint errors during build; be extra vigilant. Server externals include `@opentelemetry/exporter-jaeger` and `handlebars`.

Dev workflows
- Env: create `.env` with `GEMINI_API_KEY=...` before running.
- Scripts: `npm run dev` (port 9002), `npm run build`, `npm run lint`, `npm run typecheck`.
- Manual smoke test: ask an out-of-scope question; the model should politely refuse and not leak prompt rules.

Adding things (follow existing patterns)
- New AI flow: `src/ai/flows/<name>.ts` (Zod schema + prompt + `async function*`), API `src/app/api/<name>/route.ts`, client uses the same streaming read pattern.
- New content source: add `src/lib/<domain>-content.ts`, export via `content-data.ts`, create `get<Domain>TextForAI()`, and add a deterministic citation tag in the prompt.

Quick checklist before PR
- Citations correct and exhaustive; no external/unseen data.
- Schema and API validation updated for any new inputs.
- `aiWelcomeMessageVersion` bumped if semantics changed; `npm run typecheck` passes.

Questions or gaps? Tell me which part is unclear (flows, citations, UI/state, or build) and I’ll refine this guide with examples from the referenced files.
