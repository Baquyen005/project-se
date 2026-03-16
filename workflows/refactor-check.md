---
description: Code Review & Refactor to Standards
---

# Workflow: Code Review & Refactor to Standards
Command: `/refactor-check`

## Steps:
1. **Style & Syntax Audit:**
   - Ensure all naming is in English (camelCase for variables, PascalCase for classes).
   - Convert all `let` to `const` where possible. Remove any `var`.
   - Ensure all exported functions have JSDoc documentation.
2. **Backend Standards Alignment:**
   - Check if the controller is wrapped in `catchAsync`.
   - Ensure error throwing uses `new AppError(message, status)`.
   - Verify that any input data has a corresponding Joi validation schema.
3. **Dependency & Package Check:**
   - Ensure only `yarn` is used. Delete `package-lock.json` if found.
   - Run `yarn audit` to check for security vulnerabilities in the modified module.
4. **Security & Performance:**
   - Check for hardcoded secrets or sensitive data leakage.
   - Identify and simplify deep nested `if-else` blocks using Early Returns.
   - Check for unnecessary re-renders (Frontend) or inefficient DB queries (Backend).
5. **Final Report:**
   - Provide a summary of what was refactored and why it now aligns with the project Rules.