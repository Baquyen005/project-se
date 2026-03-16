---
name: release-master
description: Expert in Semantic Versioning (SemVer) and automated Changelog generation. Use when preparing for a production release or tagging new versions.
---
# Release Master Skill

## Versioning Rules
- **MAJOR (X.0.0):** Incompatible API changes or total UI overhauls.
- **MINOR (0.X.0):** New features added in a backward-compatible manner.
- **PATCH (0.0.X):** Backward-compatible bug fixes.

## Procedure
1. Scan commit history since the last tag using **Conventional Commits** (feat:, fix:, chore:).
2. Generate/Update `CHANGELOG.md`.
3. Bump version in `package.json` and `yarn.lock`.
4. Create a Git Tag and trigger the Production Pipeline.