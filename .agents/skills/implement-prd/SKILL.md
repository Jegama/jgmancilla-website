---
name: implement-prd
description: Implement an agreed product change from a GitHub issue or a Markdown PRD with linked GitHub issues. Map acceptance criteria to changes and verification. Can also prepare an issue plan for handoff when requested.
---

# Implement a PRD

Accept an issue URL, `owner/repo#number`, a bare issue number in a known repository, or a PRD supplied as text or a file. An issue with sufficient acceptance criteria is the PRD. For a planning-only request, use the [issue planning brief](references/plan-issue.md) and return the plan.

## Establish scope

Read the requirements, linked issues relevant to the change, and decision-bearing comments, paging through the discussion. If connected GitHub tools are unavailable, use the authenticated CLI or supplied issue text and identify any discussion you could not verify. Inspect the current implementation, existing tests and applicable repository instructions. Distinguish an agreed decision from a suggestion in a comment. When the sources conflict, resolve what the checkout establishes and ask about outstanding product decisions that would change the outcome.

For each acceptance criterion, identify the affected behavior, what already works, the smallest change needed, and a check that could fail before the fix. Keep a short checklist in the task. Reuse existing code and verification commands. A live service call, paid run, production write, issue update, or publication requires authority from the task.

## Implement

Handle a single coherent change directly. For independent work that benefits from parallel execution, dispatch workers using the [implementer brief](references/implementer.md). Order dependent changes and assign one writer per shared surface. A contract change may need its producers, consumers and fixtures in the same unit. Account for shared databases and build outputs when scheduling verification.

When an ordering decision, shared contract or ambiguous failure could materially affect the plan, use `$adversarial-review` if available. Give the reviewer the requirements and proposed approach. Apply evidence-backed feedback before committing to the affected work.

## Verify and hand off

Inspect the integrated diff, including new files. Run the repository checks relevant to the change and exercise its normal entry point. A worker's report is a lead for verification. If a check is blocked, complete independent checks and explain which behavior remains unverified.

For a browser-visible outcome, dispatch an independent reviewer using `$browser-review` as soon as the integrated build is runnable. Give them the route, build, expected user action and test data. Carry their verdict and evidence into the PR handoff. For a renamed or changed documented contract, use `$staleness-check` or trace the old claim to its remaining references. Where a companion skill is unavailable, perform its relevant checks with the available tools and identify any limits on independent verification.

Report each criterion with the change and observed result, including any failed or blocked checks. Link back to the issue and identify outstanding owner decisions. Follow the user's requested delivery scope for commits, PRs, issue comments and closure.
