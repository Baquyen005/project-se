# 🏗 Project Context & Tech Stack

## 1. Domain & Purpose
- **Core Domain**: [Enter Project Name, e.g., E-Learning Platform]
- **Target Audience**: [e.g., Students, Instructors, Admins]
- **Key Objectives**: Provide a scalable, secure, and standardized system for [Project Goal].

## 2. Technical Stack (Strict)
- **Backend**: Node.js (Express), Joi (Validation), Winston/Morgan (Logging).
- **Frontend**: React (Functional), Tailwind CSS, shadcn/ui.
- **Package Manager**: **Yarn** (Strictly no NPM).
- **Architecture**: Service-Controller pattern with centralized error handling.

## 3. Mandatory Protocols
- **Error Handling**: Use `AppError` and `catchAsync`.
- **API Standard**: Responses must follow `{status, data: {docs/doc, meta}}`.
- **Git**: Conventional Commits only.