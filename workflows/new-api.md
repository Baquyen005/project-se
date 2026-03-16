---
description: Create New API
---

# Workflow: Create New API Endpoint
Command: /new-api

Steps:
1. Identify the resource name and required fields.
2. Create a Joi validation schema in `src/validations/`.
3. Create the controller function wrapped in `catchAsync`.
4. Implement business logic in the service layer using `AppError` for failures.
5. Use `logger.info` for successful operations.
6. Ensure the response matches the standard JSON structure (docs/doc/meta).
7. Generate/Update the Swagger documentation for this endpoint.
8. Run `yarn test` to verify the new endpoint if applicable.