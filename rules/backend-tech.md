---
trigger: always_on
---

# Backend Architectural & Error Handling Rules

This rule strictly governs the backend logic, API construction, and system reliability.

## 1. Error Handling Architecture (Mandatory)
- **AppError Class:** All operational errors must be thrown using the `AppError` class.
  - Format: `next(new AppError(message, statusCode))`.
- **Async Wrapper:** Every controller and middleware function must be wrapped in `catchAsync` to ensure unhandled promise rejections are passed to the global error handler.
- **Global Error Middleware:** Do not send error responses directly from controllers. All errors must flow through the central error-handling middleware.

## 2. Standardized Logging & Monitoring
- **HTTP Request Logging (Morgan):** - All incoming requests must be logged using `morgan`.
  - Use the `combined` or `common` format for Production and `dev` format for Development.
  - Ensure Morgan is integrated with the system `logger` (Winston/Pino) to centralize all logs.
- **No Console Logs:** Use only the system `logger`.
- **Log Levels:** `logger.info()`, `logger.error()`, `logger.warn()`.

## 3. Data Validation (Joi)
- **Strict Validation:** Every API endpoint that receives data (`req.body`, `req.query`, or `req.params`) MUST have a corresponding **Joi schema**.
- **Middleware Integration:** Use a validation middleware to intercept requests. If validation fails, return an `AppError` with a `400 Bad Request` status before the request reaches the controller.
- **Schema Location:** Define Joi schemas in a separate `validations/` folder to keep logic clean.

## 4. Database & Security
- **Sanitization:** Ensure all inputs are sanitized to prevent NoSQL/SQL injection.
- **Transactions:** Use database transactions for operations involving multiple write steps to ensure atomicity.

## 5. Response Structure
All successful API responses must strictly follow this JSON format:
{
  "status": "success",
  "message": "Desired success message",
  "data": {
    "docs": [], // Use for list results
    "doc": {},  // Use for a single document result
    "meta": {   // Required for list results
      "itemsPerPage": number,
      "itemCount": number,
      "totalItems": number,
      "currentPage": number,
      "totalPages": number
    }
  }
}