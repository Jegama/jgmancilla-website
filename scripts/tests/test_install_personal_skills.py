import subprocess
import sys
import tempfile
import unittest
from pathlib import Path


SCRIPTS = Path(__file__).resolve().parents[1]
SOURCE = SCRIPTS.parent / ".agents" / "skills"


class InstallSkillsTest(unittest.TestCase):
    def setUp(self):
        temp = tempfile.TemporaryDirectory()
        self.addCleanup(temp.cleanup)
        self.root = Path(temp.name)
        self.destination = self.root / "personal skills"

    def run_installer(self, *options):
        return subprocess.run(
            [sys.executable, str(SCRIPTS / "install-personal-skills.py"),
             "--dest", str(self.destination), *options],
            capture_output=True, text=True,
        )

    def test_install_upgrade_and_read_only_check(self):
        self.assertEqual(self.run_installer("--check").returncode, 1)
        self.assertFalse(self.destination.exists())
        old = self.destination / "pr-review-loop" / "SKILL.md"
        old.parent.mkdir(parents=True)
        old.write_text("previous embedded version")
        unrelated = self.destination / "my-own-skill" / "SKILL.md"
        unrelated.parent.mkdir()
        unrelated.write_text("personal")

        self.run_installer().check_returncode()
        self.run_installer("--check").check_returncode()
        self.assertEqual(old.read_bytes(), (SOURCE / "pr-review-loop/SKILL.md").read_bytes())
        reference = self.destination / "implement-prd/references/plan-issue.md"
        self.assertEqual(reference.read_bytes(), (SOURCE / "implement-prd/references/plan-issue.md").read_bytes())
        stamp = reference.stat().st_mtime_ns
        self.run_installer().check_returncode()
        self.assertEqual(reference.stat().st_mtime_ns, stamp)
        reference.write_text("changed")
        self.assertEqual(self.run_installer("--check").returncode, 1)
        self.assertEqual(reference.read_text(), "changed")
        self.run_installer().check_returncode()
        self.run_installer("--check").check_returncode()
        self.assertEqual(unrelated.read_text(), "personal")

    def test_conflicting_symlink_preserves_other_checkout(self):
        self.destination.mkdir()
        other = self.root / "other"
        other.mkdir()
        existing = other / "SKILL.md"
        existing.write_text("independently maintained")
        (self.destination / "pr-review-loop").symlink_to(other, target_is_directory=True)
        self.assertNotEqual(self.run_installer().returncode, 0)
        self.assertEqual(existing.read_text(), "independently maintained")
        self.assertFalse((self.destination / "browser-review").exists())

    def test_matching_symlinks_are_conflicts_for_install_and_check(self):
        for relative in (".", "pr-review-loop", "implement-prd/references", "browser-review/SKILL.md"):
            with self.subTest(relative=relative):
                self.run_installer().check_returncode()
                target = self.destination / relative
                saved = self.root / "original"
                target.rename(saved)
                target.symlink_to(SOURCE / relative, target_is_directory=saved.is_dir())
                try:
                    for options in ((), ("--check",)):
                        with self.subTest(options=options):
                            result = self.run_installer(*options)
                            self.assertNotEqual(result.returncode, 0)
                            self.assertIn("Conflicting destination", result.stderr)
                            self.assertTrue(target.is_symlink())
                finally:
                    target.unlink()
                    saved.rename(target)


if __name__ == "__main__":
    unittest.main()
