---
name: security-auditor
description: Audits code for security vulnerabilities like SQL Injection, XSS, and hardcoded secrets. Use when reviewing code or before deployment.
---

# Security Auditor Skill

## Audit Checklist
1. **Secrets:** Scan for API keys or passwords. Propose `.env` migration if found.
2. **Validation:** Check if all `req.body` inputs are filtered.
3. **Auth:** Ensure `RBAC` (Role-Based Access Control) is applied to sensitive routes.
4. **Encryption:** Ensure passwords use `bcrypt` or `argon2`.

## Behavior
If a vulnerability is found, stop and warn the user immediately with a "SECURITY ALERT" block.