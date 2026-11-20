---
name: staleness-check
description: Check a diff or named path for stale documentation, instructions, comments, and references after a behavior change, rename, or removal. Return each contradicted claim with its source and a suggested correction.
---

# Check for stale claims

Start with the requested diff, revision range or path. Inspect the change and identify concrete names, commands, defaults, paths or behavior that changed. For a rename, record the old and new names. Include relevant new files when reviewing a working tree.

Read nearby project guides, instructions and comments. Search beyond changed files for the old name or assertion and inspect each match in context. Verify path and symbol references relative to their owning document. For a link used as evidence, check both where it resolves and whether the target supports the current claim. Distinguish dated release notes and historical examples from instructions that still present themselves as current.

Return each materially distinct finding with the claim location, the source that contradicts it, why it matters, and a suggested correction. Group repeated instances of the same claim while listing the locations that need attention. If the observed implementation conflicts with the agreed requirement, flag that conflict before proposing wording that would make a regression look intentional. Mark inaccessible evidence or ambiguous intent as unverified. Report the revision or scope swept and allow zero findings.

Keep the sweep read-only unless the user asks for corrections. In a large review, assign disjoint files or claims to independent sweepers and have the coordinator reconcile overlaps.
