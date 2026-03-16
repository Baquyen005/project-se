# 🤖 Project Agent Operating Guide

This project is equipped with a custom AI Agent configuration to ensure high-quality, standardized development. This document lists the available Rules and Workflows to assist developers in maintaining the project's integrity.

## 🛠 Project Rules (Mandatory)
These rules are located in `.agents/rules/` and guide the Agent's decision-making:

- **`coding-standards.md`**: General code style, naming conventions (English), and **Yarn** usage.
- **`backend-tech.md`**: Backend architecture, `AppError` handling, `catchAsync`, and JSON response standards.
- **`frontend-tech.md`**: React (Functional Components), Tailwind CSS, and state management.
- **`git-workflow.md`**: Branching strategy and Conventional Commits.
- **`security-check.md`**: Security protocols, secrets management, and data sanitization.
- **`testing-standards.md`**: Unit/E2E testing requirements and coverage goals.
- **`documentation-rule.md`**: JSDoc, Swagger, and README maintenance requirements.
- **`debug-protocol.md`**: Procedures for documenting bugs in `docs/incidents/`.

## 🔄 Available Workflows (Slash Commands)
Execute these commands in the Agent's input box to automate repetitive tasks:

| Command | Purpose | Key Actions |
| :--- | :--- | :--- |
| `/new-api` | Create a new API endpoint | Joi Validation -> Controller -> Service -> Swagger Update. |
| `/fix-bug` | Standardized bug fixing | Root Cause Analysis -> Fix -> Test -> Create Incident Doc. |
| `/refactor-check` | Code audit & cleanup | Align existing code with the latest project Rules & Standards. |
| `/pre-submit` | Final check before PR | Verify coding standards, tests, and yarn-only dependencies. |
| `/deploy-check` | Pre-deployment checklist | Build check, Env verification, and Smoke test prep. |

## 🚀 How to use
1. **Initial Setup:** Ensure your Agent is reading the `.agents/rules/` folder.
2. **Execute Workflows:** Simply type the command (e.g., `/fix-bug`) followed by a brief description of the task.
3. **Follow Patterns:** The Agent will automatically use `AppError` and `catchAsync` based on the `backend-tech.md` rule.
4. **Yarn Only:** All package management tasks will be handled via `yarn`.

## 📁 Critical Folders for Agent
- `.agents/rules/`: Local project constraints.
- `.agents/workflows/`: Executable automation scripts.
- `docs/incidents/`: Historical bug logs (managed via `/fix-bug`).
- `docs/adr/`: Architectural Decision Records.

---
*Last Updated: 2026-03-14*