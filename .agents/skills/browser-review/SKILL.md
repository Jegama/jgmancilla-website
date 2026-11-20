---
name: browser-review
description: Delegate an independent browser check after implementation or during PR review when a change affects what people see or can do in a browser. Exercise the changed flow and return a verdict with evidence.
---

# Browser review

## When to run

Use this for a change to a rendered screen or a browser-observable outcome, including one caused by an API, permission, or persistence change. Name the user action and its expected result. CLI, worker, and data-only changes with no browser surface keep their own verification path.

## Dispatch

When the changed flow is runnable, send a fresh subagent to review it. Give the reviewer the route or launch instructions, the tested revision or working-tree state, the acceptance criteria, and any needed test account or fixture instructions. Share a design reference or a specific device constraint when it defines success. Let the reviewer observe the result before reading the implementer's explanation. A subagent already assigned this role performs the review directly.

Prefer a local app serving the working tree or a preview whose revision can be verified. Use the project's browser tests, headless browser, or interactive browser available to the reviewer. Use isolated test data for actions that save or send anything. Keep the product code and PR discussion in the implementer's hands.

## Exercise the change

1. Enter through the normal UI. Perform the action and observe the resulting state. For a persistence claim, reload or revisit. For validation or recovery, trigger the relevant failure and try again.
2. Match the check to the change. For a responsive layout, inspect the affected viewport and capture the relevant rendered state. For keyboard interaction, operate the controls with the keyboard and observe focus. A visual redesign may need before/after screenshots at the same size. Capture only evidence that helps decide the criterion.
3. Tie each observation to the route, browser, viewport when relevant, and tested build. Record expected and observed results, with a screenshot, trace, or reproducible browser steps as appropriate. Use test data and keep sensitive values out of artifacts.

## Verdict and handoff

Return **Accept** when the required scenarios were observed to pass, **Needs changes** for a demonstrated failure, or **Blocked** when a required scenario could not be exercised or the target build could not be verified. When a failure and a blocker coexist, report **Needs changes** and list the unverified scenario separately. For each failure include the shortest reproduction, user impact, and evidence. Zero findings is a valid result.

The coordinating agent owns fixes and sends the affected scenario back for verification. Reuse an implementation-stage result in PR review when it covers the current behavior and build, or when intervening changes demonstrably cannot affect it. A browser pass by the coordinating agent may supply evidence if delegation is unavailable. Identify it as a self-check and report the limit on independent review. A missing browser, login, or test fixture remains a verification gap.
