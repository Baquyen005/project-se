---
trigger: always_on
---

# Documentation & Knowledge Management

Ensures the project remains maintainable and understandable for all team members.

## 1. Inline Documentation
- **JSDoc:** Every exported function, class, and interface must have JSDoc comments describing parameters, return types, and potential errors.
- **Complex Logic:** Explain the "Why", not the "What".

## 2. API & Architecture
- **OpenAPI/Swagger:** Update Swagger definitions immediately when an API route or schema changes.
- **README Updates:** If a new library is added or an environment variable is introduced, update the root `README.md`.
- **ADR (Architecture Decision Records):** Document major architectural changes in `docs/adr/`.

## 3. Incident Logging
- When fixing a bug, follow the `debug-protocol.md` and generate an incident report in `docs/incidents/`.