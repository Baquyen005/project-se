---
name: backend-architect
description: Expert in Node.js backend architecture. Handles AppError, catchAsync, database transactions, and centralized logging. Use when building or refactoring server-side logic.
---

# Backend Architect Skill

## Core Responsibilities
- Implement centralized error handling using `AppError` and `catchAsync`.
- Ensure all database operations are optimized and use transactions for multi-step writes.
- Integrate `morgan` and `winston` for comprehensive logging.

## Execution Flow
1. Check for existing models/schemas.
2. Wrap all controllers in `catchAsync`.
3. Validate inputs using Joi schemas.
4. Use `logger.info` for business milestones and `logger.error` for exceptions.