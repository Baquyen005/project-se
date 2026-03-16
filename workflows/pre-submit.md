---
description: Pre-Submit Review
---

# Workflow: Pre-Submit Review
Command: `/pre-submit`

Steps:
1. Verify Coding Standards: Check for `const/let`, JSDoc, and English naming.
2. Backend Check: Ensure all new controllers use `catchAsync` and `AppError`.
3. Validation Check: Ensure all new endpoints have a Joi schema in `validations/`.
4. Package Check: Confirm no `package-lock.json` was accidentally created and only `yarn` commands were used.
5. Documentation: Check if `README.md` or Swagger needs updates.
6. Summary: Provide a checklist of what has been verified against the project rules.