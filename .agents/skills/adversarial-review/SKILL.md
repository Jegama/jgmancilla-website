---
name: adversarial-review
description: Independently critique a proposed implementation plan or review a written patch against a disputed or recurring finding. Return an evidence-backed verdict on correctness and scope.
---

# Adversarial review

Use a fresh reviewer when the task calls for independent judgment. Give them the acceptance criteria, review target, and the decision at stake. A reviewer already assigned this role performs the review directly. If independent delegation is unavailable, identify who performed the check. Keep the review read-only and return findings to the coordinator.

**For a plan**, read the issue or PRD, the proposed approach, and the code the plan relies on. Look for an unmet criterion, a dependency scheduled too late, conflicting ownership, or a simpler implementation that satisfies the same constraints. Show a specific consequence for the planned behavior.

**For a patch**, inspect the actual changes, including staged, unstaged and relevant new files, or the specified PR base and head. Trace the reported defect from an input to an observable result. Check whether the fix reaches the first affected consumer and other callers that share the same failure. For a disputed finding, look for a supported input or configuration that would change the disposition. Compare to the base when it matters for attribution.

Return **Accept** when the reviewed scope meets its criteria with zero supported defects, **Needs changes** for a demonstrated material defect, or **Blocked** when missing evidence prevents a verdict. For each finding give the trigger, user or caller impact, source location and a check that would distinguish a fix. Separate open questions from confirmed findings. When a defect coexists with an unverified area, lead with the defect and state the coverage limit. The coordinator owns changes and any external reply.
