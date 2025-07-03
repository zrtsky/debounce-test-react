# useDebounce Hook Implementation Test

This project demonstrates the implementation of a custom `useDebounce` React hook with TypeScript. The hook provides debounced values, ready state tracking, and cancellation functionality.

## 🎯 Task Overview

Implement a `useDebounce` hook that:

- Debounces input values with a configurable delay
- Tracks whether the debounced value is ready
- Provides a cancel function to reset the debounce timer
- Returns an object with `{ isReady, debouncedValue, cancel }`

## 📁 Project Structure

```text
debounce-test-react/
├── src/
│   ├── hooks/
│   │   ├── index.ts              # Hook exports
│   │   └── use-debounce.tsx      # useDebounce implementation (TO IMPLEMENT)
│   ├── App.tsx                   # Main demo component
│   ├── app.css                   # Global styles
│   ├── main.tsx                  # App entry point
```

## 🔧 useDebounce Hook Requirements

The `useDebounce` hook should be implemented in `src/hooks/use-debounce.tsx` with the following signature:

```typescript
export const useDebounce = (value: any, delay: number) => {
  return {
    isReady: boolean,        // True when debounce timer completes
    debouncedValue: any,     // The debounced value
    cancel: () => void,      // Function to cancel the debounce timer
  }
}
```

### Expected Behavior

1. **Debouncing**: When `value` changes, start a timer for `delay` milliseconds
2. **Ready State**: `isReady` should be `false` during the delay period and `true` when the timer completes
3. **Debounced Value**: `debouncedValue` should update only after the delay period
4. **Cancellation**: `cancel()` should reset the timer and set `isReady` to `false`
5. **Cleanup**: Properly clean up timers on component unmount

## 🎨 Demo Application

The demo application (`src/App.tsx`) provides:

- Text input field that triggers the debounce
- Real-time display of current value, debounced value, and ready state
- Cancel button to test the cancellation functionality
- Responsive design with Tailwind CSS

## 🚀 Getting Started

1. **Install dependencies:**

   ```bash
   pnpm install
   ```

2. **Start development server:**

   ```bash
   pnpm dev
   ```

3. **Implement the hook:**
   - Open `src/hooks/use-debounce.tsx`
   - Implement the required functionality
   - Test with the demo application

## 🧪 Testing the Implementation

1. Type in the input field and observe:
   - `isReady` should be `false` while typing
   - `debouncedValue` should update after 3 seconds of inactivity
   - `isReady` should become `true` when debounce completes

2. Test cancellation:
   - Type something and click "Cancel" before 3 seconds
   - `isReady` should become `false`
   - Debounce timer should reset

## 🛠 Technology Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **clsx** - Conditional class names
- **ESLint** - Code linting with TypeScript support

## 🎯 Success Criteria

Your implementation should:

- ✅ Debounce input values correctly
- ✅ Track ready state accurately
- ✅ Provide working cancellation
- ✅ Clean up resources properly
- ✅ Handle edge cases gracefully
- ✅ Follow TypeScript best practices
