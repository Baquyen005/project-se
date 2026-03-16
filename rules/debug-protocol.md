---
trigger: always_on
---

# Debugging & Error Documentation Protocol

Whenever a significant bug is identified and fixed, the Agent must document the process in the `docs/incidents/` directory.

## 1. Documentation Trigger
- Required for: Critical production bugs, complex logic errors, or recurring issues.
- Not required for: Simple syntax typos or linter warnings.

## 2. Incident File Format
Create a file named: `docs/incidents/YYYY-MM-DD-short-description.md`

## 3. Required Content Template
Every incident report must include:
- **Issue Description:** What was the observed behavior vs. expected behavior?
- **Root Cause Analysis (RCA):** Why did this happen? (Code flaw, edge case, library update?)
- **The Fix:** Summary of the code changes made to resolve the issue.
- **Prevention:** How to prevent this in the future (e.g., "Added a new Joi validation rule" or "Added a Unit Test").
- **Related Logger Output:** Paste relevant snippets from the `logger.error` output.

## 4. Automation Rule
If the user says "Fix this bug", the Agent should:
1. Identify and fix the bug.
2. Verify the fix with a test case.
3. **Automatically generate** the incident Markdown file as described above.