---
trigger: always_on
---

# Git Workflow & Source Control Protocol

This rule is activated whenever the Agent proposes a code commit, branch creation, or Pull Request (PR).

## 1. Branching Strategy
- **Base Branch:** All new work must be branched out from the `develop` branch unless otherwise specified.
- **Naming Convention:** Use lowercase with hyphens for branch names.
  - **Features:** `feature/short-description` (e.g., `feature/user-authentication`)
  - **Bug Fixes:** `bugfix/issue-description` (e.g., `bugfix/header-overlap-mobile`)
  - **Hotfixes:** `hotfix/critical-fix-name` (for urgent production fixes)
- **Isolation:** Each branch should focus on a single task or logical set of changes.

## 2. Commit Message Standards
All commit messages must strictly adhere to the [Conventional Commits](https://www.conventionalcommits.org/) specification.

- **Format:** `<type>(optional scope): <description>`
- **Common Types:**
  - `feat`: A new feature for the user.
  - `fix`: A bug fix for the user.
  - `docs`: Documentation only changes.
  - `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
  - `refactor`: A code change that neither fixes a bug nor adds a feature.
  - `perf`: A code change that improves performance.
  - `test`: Adding missing tests or correcting existing tests.
  - `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation.

- **Examples:**
  - `feat: add user login API endpoint`
  - `fix: resolve memory leak in dashboard charts`
  - `refactor: simplify error handling in auth middleware`

## 3. Pull Request (PR) Requirements
Before proposing a PR, the Agent must:
- Ensure the code is rebased or merged with the latest `develop` branch.
- Verify that no sensitive information (API keys, secrets) is being committed.
- Provide a concise summary of changes, including any specific testing steps required for the reviewer.