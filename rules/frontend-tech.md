---
trigger: glob
globs: **/*.tsx, **/*.jsx
---

# Frontend Development Standards (React & Tailwind CSS)

This rule is applied to all frontend-related files, specifically matching patterns like `**/*.tsx`, `**/*.jsx`, `**/*.ts`, and `**/*.js` within the web or client directories.

## 1. UI & Styling Framework
- **Tailwind CSS First:** Always use Tailwind CSS utility classes for styling. Avoid creating separate `.css` or `.scss` files unless strictly necessary for third-party library overrides.
- **Design Consistency:** Follow a mobile-first responsive design approach. Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to ensure layout integrity across devices.
- **Component Primitives:** Use a consistent component library if one is present (e.g., Headless UI, Radix UI, or Shadcn/ui).

## 2. React Component Architecture
- **Functional Components:** Use only Functional Components with Hooks (`useState`, `useEffect`, `useMemo`, etc.). Class components are prohibited.
- **Component Decomposition:** Break down large components into smaller, reusable sub-components. A single file should ideally not exceed 200 lines of code.
- **Prop Typing:** Strictly use **TypeScript Interfaces** or **Types** to define props. Avoid using `any`.
- **Custom Hooks:** Extract complex logic, data fetching, or reusable stateful patterns into custom hooks (e.g., `useAuth`, `useFetchData`).

## 3. State Management & Data Fetching
- **Server State:** Use specialized libraries like **TanStack Query (React Query)** or **SWR** for data fetching, caching, and synchronization. Do not manually manage loading/error states in `useEffect`.
- **Client State:** Use **Zustand** or **Context API** for global UI state. Keep local state as close to the component as possible.

## 4. Performance & Best Practices
- **Memoization:** Use `useMemo` and `useCallback` judiciously to prevent unnecessary re-renders in performance-critical components.
- **Image Optimization:** Always use descriptive `alt` tags and implement lazy loading for images.
- **Accessibility (a11y):** Ensure all interactive elements are keyboard-accessible and have appropriate ARIA labels.

## 5. Integration with Error Handling
- **Boundary Handling:** Implement **React Error Boundaries** to catch UI-level crashes gracefully.
- **API Errors:** Use the global `AppError` logic to display user-friendly toast notifications or error states when API calls fail.

## 6. Code Example
```tsx
interface UserProfileProps {
  userId: string;
  onUpdate: (user: User) => void;
}

const UserProfile: React.FC<UserProfileProps> = ({ userId, onUpdate }) => {
  const { data: user, isLoading, error } = useUserQuery(userId);

  if (isLoading) return <SkeletonLoader />;
  if (error) return <ErrorMessage message="Failed to load user profile" />;

  return (
    <div className="flex flex-col p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold text-gray-900">{user.name}</h2>
      <button 
        onClick={() => onUpdate(user)}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Edit Profile
      </button>
    </div>
  );
};