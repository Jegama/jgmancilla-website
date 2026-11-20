#!/usr/bin/env python3
"""Run from the desired source revision as the Codex task user."""

import argparse
import filecmp
import shutil
import sys
from pathlib import Path
from tempfile import NamedTemporaryFile


SKILLS = ("adversarial-review", "browser-review", "staleness-check", "implement-prd", "pr-review-loop")


def bundle_files(source_root):
    files = []
    for name in SKILLS:
        folder = source_root / name
        entrypoint = folder / "SKILL.md"
        if not entrypoint.is_file():
            raise FileNotFoundError(f"Missing required skill: {entrypoint}")
        # Publish each skill's entry point after its supporting resources.
        for path in sorted(folder.rglob("*")):
            parts = path.relative_to(folder).parts
            if any(part.startswith(".") or part == "__pycache__" for part in parts):
                continue
            if path != entrypoint and path.is_file():
                files.append(path)
        files.append(entrypoint)
    return files


def install_file(source, target):
    target.parent.mkdir(parents=True, exist_ok=True)
    with NamedTemporaryFile(dir=target.parent, delete=False) as staging:
        staged = Path(staging.name)
    try:
        shutil.copy2(source, staged)
        staged.replace(target)
    finally:
        staged.unlink(missing_ok=True)


def destination_file(destination, relative):
    path = destination
    for name in relative.parts:
        if path.is_symlink() or (path.exists() and not path.is_dir()):
            raise ValueError(f"Conflicting destination: {path}")
        path = path / name
    if path.is_symlink() or (path.exists() and not path.is_file()):
        raise ValueError(f"Conflicting destination: {path}")
    return path


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--dest", type=Path, default=Path.home() / ".agents" / "skills")
    parser.add_argument("--check", action="store_true", help="Verify installed files without writing")
    args = parser.parse_args()
    destination = args.dest.expanduser().absolute()
    checkout = Path(__file__).resolve().parents[1]
    source_root = checkout / ".agents" / "skills"
    # A parent such as ~/.agents may itself point into the disposable checkout.
    for parent in destination.parents:
        if parent.is_symlink():
            resolved = parent.resolve()
            if resolved == checkout or checkout in resolved.parents:
                raise ValueError(f"Conflicting destination: {parent}")
    updates = []
    for source in bundle_files(source_root):
        target = destination_file(destination, source.relative_to(source_root))
        if target.is_file() and filecmp.cmp(source, target, shallow=False):
            continue
        if args.check:
            print(f"Missing or different: {target}", file=sys.stderr)
        updates.append((source, target))
    if args.check and updates:
        return 1
    for source, target in updates:
        install_file(source, target)
    action = "Verified" if args.check else "Installed"
    print(f"{action} in {destination}: {', '.join(SKILLS)}")
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except (OSError, ValueError) as error:
        sys.exit(str(error))
