# Example: Secure Authentication System Design

1. **Database Schema**:
   - `User`: id, email, password_hash, role, status.
   - `RefreshToken`: id, userId, token, expiresAt.

2. **Security Flow**:
   - Hash passwords using `bcrypt` (salt rounds: 12).
   - Use HttpOnly, Secure, SameSite cookies for tokens.
   - Implement rate limiting (e.g., max 5 login attempts per 15 mins).

3. **Logic Flow**:
   - Controller -> Validation (Joi/Zod) -> Auth Service -> Database.