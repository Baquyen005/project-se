---
trigger: always_on
---

# Testing Standards & Quality Assurance

This rule defines the mandatory testing requirements to ensure code reliability and prevent regressions.

## 1. Unit Testing (Logic Focus)
- **Framework:** Use **Jest** for backend/logic and **Vitest** or **Jest** for frontend.
- **Coverage:** Aim for a minimum of **80% coverage** for business logic, services, and utility functions.
- **Naming:** Files must follow the `[filename].test.ts` or `[filename].spec.ts` pattern.

## 2. Testing Principles
- **Isolation:** Each test must be independent. Use `beforeEach` to reset databases or mocks.
- **Mocking:** Always mock external dependencies (API calls, Email services, Payment gateways).
- **AAA Pattern:** Structure tests using **Arrange, Act, Assert**.
- **Descriptive Titles:** Use clear sentences: `describe('AuthService', () => { it('should hash password before saving', ... ) })`.

## 3. Frontend Testing
- **Component Tests:** Use **React Testing Library**. Focus on user behavior (clicks, inputs) rather than internal implementation details.
- **E2E Testing:** Use **Playwright** for critical paths like "User Checkout" or "Onboarding".