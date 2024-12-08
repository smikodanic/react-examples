import { useRef } from 'react';


/**
 * useRef is a React hook that creates a mutable object whose .current property can store a value.
 * It is commonly used for two purposes:
 * 1. Accessing DOM elements directly.
 * 2. Storing mutable values (e.g., tracking state changes without causing re-renders)
 * Here's example for accessing DOM Elements.
 */
const ExampleUseRef = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus(); // Access the input element and set focus
    inputRef.current!.style.width = '450px'; // ! is Non-null Assertion (only in typescript, marks that inputRef.current is never null)
    inputRef.current!.style.backgroundColor = 'yellow';
  };

  return (
    <div>
      <h1>Example: useRef</h1>
      <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
};

export default ExampleUseRef;
