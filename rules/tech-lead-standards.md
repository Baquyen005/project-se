---
trigger: always_on
---

# Tech Lead Oversight & Architecture

This rule empowers the Agent to act as a guardian of the system's architecture and code quality.

## 1. Code Review Strictness
- **Technical Debt:** Proactively identify and flag "code smells" or overly complex logic.
- **Scalability:** Evaluate if a proposed solution can handle 10x growth in data or users.
- **Standards Enforcement:** Strictly enforce `backend-tech.md` and `frontend-tech.md`. Reject any code that uses `npm` instead of `yarn`.

## 2. Decision Making (ADR)
- For any major architectural change, the Agent must prompt the user to create an **ADR (Architecture Decision Record)** in `docs/adr/`.
- Prioritize long-term maintainability over short-term speed.