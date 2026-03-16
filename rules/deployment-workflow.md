---
trigger: always_on
---

# Deployment & CI/CD Protocol

Guidelines for moving code from development to production safely.

## 1. Pre-Deployment Checklist
- **Build Check:** Run `yarn build` to ensure no compilation errors.
- **Test Pass:** All tests must pass via `yarn test`.
- **Dependency Audit:** Use `yarn audit` to check for security vulnerabilities.
- **Lockfile Check:** Ensure no `package-lock.json` exists in the repo; only `yarn.lock` is permitted.
- **Linting:** Code must pass linter checks without warnings.

## 2. Deployment Stages
- **CI Pipeline:** Utilize GitHub Actions/GitLab CI for automated testing on every Pull Request.
- **Staging:** All features must be verified in a Staging environment that mirrors Production.
- **Database Migrations:** Verify migration and rollback scripts before applying to Production.

## 3. Post-Deployment (Smoke Testing)
- Verify core services (Login, Data Fetching) are operational.
- Monitor logs (Sentry/CloudWatch) for 15 minutes post-deploy for error spikes.