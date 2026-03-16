---
trigger: always_on
---

# General Coding Standards & Best Practices

This rule applies to the entire repository to ensure code maintainability and readability.

## 1. Language & Naming
- **Language:** Code, comments, and variables must be in **English**.
- **Variables:** Use `camelCase`.
- **Classes/Interfaces:** Use `PascalCase`.
- **Constants:** Use `UPPER_SNAKE_CASE`.

## 2. Logic & Syntax
- **Package Management:** Use ONLY **Yarn** (`yarn add`, `yarn remove`). Do not use `npm`. Always ensure `yarn.lock` is updated and committed.
- **Immutability:** Always prefer `const` over `let`. Never use `var`.
- **Async Pattern:** Use `async/await` exclusively. Avoid `.then()` chains.
- **Clean Code:**
  - **Early Returns:** Check for fail conditions early to avoid deep `if-else` nesting.
  - **SRP:** Each function/module must have a Single Responsibility.
  - **Dry Principle:** Abstract repetitive logic into utility functions or hooks.

## 3. Documentation
- **JSDoc:** Every exported function must have a JSDoc comment explaining its purpose, parameters, and return value.
- **Complex Logic:** Use comments to explain "Why" a certain logic is implemented, not just "What" it does.

## 4. Refactoring Guidelines
When modifying existing code:
- Refactor to match these standards if the file is being significantly touched.
- Ensure all new code has proper unit test coverage.