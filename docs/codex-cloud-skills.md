# Personal workflow skills for Codex Cloud

## Upgrade an existing calvinist-parrot environment

Paste this into the environment's **Edit** setup conversation.

```text
Update the install script for the existing Jegama/calvinist-parrot Codex Cloud environment. Find the embedded PR Review Loop block that uses the PR_REVIEW_LOOP_PAYLOAD delimiter. Replace that entire block, including both base64 payloads, with a reproducible install of personal-skills-v1.0.0. Preserve the rest of the install script, the start skill, and the project's existing configuration. If the pinned installer is already present, verify it without adding another block.

During setup, fetch https://github.com/Jegama/jgmancilla-website.git at commit e5154c307d4bf99da2e6a9ea75cfd3546f8e8915 into a temporary checkout and verify its HEAD. As the user who runs Codex tasks, run python3 scripts/install-personal-skills.py from that checkout, then run it again with --check. After verification, write the full commit SHA to ~/.agents/jegama-workflow-skills.rev and remove the temporary checkout.

Run the revised setup. Report the verified revision and installed paths for adversarial-review, browser-review, staleness-check, implement-prd, and pr-review-loop. Check for duplicate skill names across the project and user skill directories. Exercise a local browser page using the available browser runner and report the observed result or blocker. Leave the updated environment ready for me to republish.
```

## Set up a new repository environment

Select the target GitHub repository when creating the environment. The same prompt works for each repository without editing it.

```text
Prepare a Codex Cloud environment for the GitHub repository selected in this setup. Identify the repository from its checkout. Read its AGENTS.md and setup documentation where present, install its declared dependencies, and run its documented local checks using test data. Keep paid provider runs and production writes outside the setup smoke test.

Include my five personal workflow skills from https://github.com/Jegama/jgmancilla-website.git at commit e5154c307d4bf99da2e6a9ea75cfd3546f8e8915 (personal-skills-v1.0.0). Fetch and verify that commit in a temporary checkout. If the target repository already ships all five skills, use the pinned checkout's scripts/install-personal-skills.py with --dest pointing at the repository's .agents/skills and --check. If that reports a version conflict, tell me which files differ. Otherwise, for a repository without bundled skills, add the pinned fetch to its persistent install script, run the installer as the Codex task user, verify with --check, and write the full SHA to ~/.agents/jegama-workflow-skills.rev. For partial overlap, identify the conflicting paths before creating duplicate copies. Clean up the temporary checkout.

Report the repository, verified revision, one path each for adversarial-review, browser-review, staleness-check, implement-prd, and pr-review-loop, and the project checks that passed or were blocked. For a project with a browser UI, exercise one local user-visible flow with a browser and report what happened. Leave the environment ready for me to publish.
```

## Install from GitHub

Use the following block in the environment install script. It requires Git, Python 3.8 or later, and setup-time HTTPS access to the public source repository. The skills are installed for the current task user. The checkout can be discarded after verification.

```sh
(
  set -eu
  skills_rev=e5154c307d4bf99da2e6a9ea75cfd3546f8e8915
  skills_tmp=$(mktemp -d)
  trap 'rm -rf -- "$skills_tmp"' EXIT
  git -C "$skills_tmp" init -q
  git -C "$skills_tmp" fetch -q --depth=1 https://github.com/Jegama/jgmancilla-website.git "$skills_rev"
  git -C "$skills_tmp" checkout -q --detach FETCH_HEAD
  test "$(git -C "$skills_tmp" rev-parse HEAD)" = "$skills_rev"
  python3 "$skills_tmp/scripts/install-personal-skills.py"
  python3 "$skills_tmp/scripts/install-personal-skills.py" --check
  printf '%s\n' "$skills_rev" > "$HOME/.agents/jegama-workflow-skills.rev"
)
```

For **jgmancilla-website** on a revision that already includes these five skills, use the checked-in copies. Run `python3 scripts/install-personal-skills.py --dest .agents/skills --check` from that checkout. Start with a single discoverable copy of each skill. If upgrading a website environment that already has personal copies, inspect the two locations before retiring duplicates. [OpenAI, skill discovery and duplicate names](https://learn.chatgpt.com/docs/build-skills#where-codex-loads-local-skills)

## Verify in a fresh task

Publish or republish the prepared environment and open a new task in it. Paste this prompt:

> List the discovered paths for adversarial-review, browser-review, staleness-check, implement-prd, and pr-review-loop. Check that each name appears once. Report the revision from ~/.agents/jegama-workflow-skills.rev for a user install, or the checkout HEAD for a repo install. Open implement-prd's issue-planning reference and explain when an existing GitHub issue can serve as the PRD. Report whether independent delegation and a browser are available, with what you actually verified. Keep this check read-only.

The revision receipt records the last successful setup. Use the installer's `--check` against the pinned source to compare installed file contents. For browser readiness, exercise a local test page or the project's browser test in the published environment. A green build alone leaves that capability unverified. Updates take effect in new tasks after republishing. [OpenAI, Cloud environments, saved state](https://learn.chatgpt.com/docs/environments/cloud-environments#reuse-and-update-saved-state)

## Which workflow to use

| Request | Entry point |
| --- | --- |
| Implement a GitHub issue or supplied PRD | `$implement-prd` with its [implementer brief](../.agents/skills/implement-prd/references/implementer.md) for delegated changes. |
| Prepare an ambiguous issue for handoff | Ask `$implement-prd` for a plan only. Use the [issue-planning reference](../.agents/skills/implement-prd/references/plan-issue.md). |
| Challenge a plan or a disputed fix | `$adversarial-review` |
| Exercise an affected user journey in the running app | `$browser-review` |
| Find current docs or references invalidated by a change | `$staleness-check` |
| Address PR feedback and monitor Copilot and CI | `$pr-review-loop` |

## Updating or installing offline

For an update or rollback, change the install block to the selected full bundle commit, run setup and verification again, and republish. The installer refreshes shipped files and preserves other files already present. For an exact reinstall after retiring a skill, use a fresh destination or review the retired files separately.

For offline setup, unzip the [versioned skill bundle](https://github.com/Jegama/jgmancilla-website/releases/download/personal-skills-v1.0.0/personal-workflow-skills-v1.0.0.zip), enter its top-level directory, and run `python3 scripts/install-personal-skills.py`, then `python3 scripts/install-personal-skills.py --check`. Copy the included `REVISION` file to `$HOME/.agents/jegama-workflow-skills.rev` after verification. The archive's SHA-256 is `560285e19887219dce476f0b43106d4ae6b44a689e2aa3d723590b114c26c7a9`.
