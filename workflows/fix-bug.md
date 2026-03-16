---
description: Professional Bug Fixing & Documentation
---

# Workflow: Professional Bug Fixing & Documentation
Command: `/fix-bug`

## Steps:
1. **Root Cause Analysis (RCA):**
   - Search through system logs using the `logger` (Winston/Pino) or Morgan request logs to identify the error.
   - Trace the error back to the specific line in the Backend or Frontend.
2. **Standardized Implementation:**
   - Apply the fix using `catchAsync` and `AppError` for Backend or appropriate Error Boundaries for Frontend.
   - Replace any `console.log` used for debugging with proper `logger.debug()` or `logger.info()`.
3. **Validation:**
   - Run the relevant test suite using `yarn test`. 
   - If no test exists for this bug, create a new unit test to prevent regression.
4. **Automated Documentation (Mandatory):**
   - Create a new incident report in `docs/incidents/YYYY-MM-DD-description.md` following the `debug-protocol.md`.
   - Include: Issue, Root Cause, Fix, and Prevention steps.
5. **Git Commit:**
   - Commit the changes using Conventional Commits format: `fix: <description>`.