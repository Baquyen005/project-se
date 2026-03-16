---
trigger: always_on
---

# Security & Data Protection Protocol

Strict adherence to this rule is required to prevent vulnerabilities and data breaches.

## 1. Secrets Management
- **No Hardcoding:** Never commit API keys, passwords, or secrets. Use `.env` files and reference them via `process.env`.
- **Gitignore:** Ensure `.env`, `node_modules`, and sensitive logs are in `.gitignore`.

## 2. Input Validation & Defense
- **Injection Prevention:** Use **Joi** for all request validations. Use parameterized queries (ORMs like Prisma/Sequelize) to prevent SQL/NoSQL injection.
- **XSS Protection:** Sanitize user-generated content before rendering on the frontend.
- **Hashing:** Use **Argon2** or **bcrypt** for password hashing. Never store plain-text passwords.

## 3. Authentication & Authorization
- **RBAC:** Always check user permissions before executing sensitive logic.
- **JWT Security:** Use `httpOnly` and `secure` flags for cookies. Implement short-lived access tokens and secure refresh tokens.