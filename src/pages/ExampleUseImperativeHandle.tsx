import { forwardRef, useImperativeHandle, useRef } from 'react';


/*
useImperativeHandle is a React hook that customizes the instance value of a ref when it is passed to a child component.
It is commonly used with forwardRef to expose specific methods or properties of a child component to its parent, allowing imperative control over the child.

Key Points
1. Works alongside forwardRef.
2. Allows a parent to directly interact with a child’s DOM elements or methods.
3. Should be used sparingly; React prefers declarative programming.
*/


// CHILD COMPONENT
const CustomInput = forwardRef((props, ref) => { // In the forwardRef function, props refers to the properties or attributes that are passed to a React component
  const inputRef = useRef<HTMLInputElement>(null);
  console.log('child props::', props);

  useImperativeHandle(ref, () => ({
    focusInput() {
      inputRef.current?.focus(); // Custom method exposed to the parent
    },
  }));

  return <input ref={inputRef} type="text" placeholder="Click the button to focus me" style={{ width: "450px" }} />;
});



// PARENT COMPONENT
const ParentComponent = () => {
  const inputRef = useRef<{ focusInput: () => void }>(null);

  const handleFocus = () => {
    inputRef.current?.focusInput(); // Calls the child component's method
  };

  return (
    <div>
      <h1>Example: useImperativeHandle</h1>
      <CustomInput ref={inputRef} />
      <button onClick={handleFocus}>Focus Input</button>
    </div>
  );
};



export default ParentComponent;
