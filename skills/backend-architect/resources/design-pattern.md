# Recommended Backend Patterns

### 1. Repository Pattern
Separates the logic that retrieves data from a business logic layer.
- **Benefit**: Makes unit testing easier by mocking the data layer.

### 2. Dependency Injection (DI)
Passes dependencies (services, database connections) into classes.
- **Benefit**: Decouples code and improves flexibility.

### 3. Circuit Breaker
Prevents a failure in one service from cascading to others.
- **Use case**: When calling third-party APIs (Stripe, Twilio).

### 4. CQRS (Command Query Responsibility Segregation)
Separates read and update operations for a database.
- **Use case**: High-traffic applications with complex read queries.