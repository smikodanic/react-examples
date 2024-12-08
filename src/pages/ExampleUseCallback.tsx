import { useState, useCallback, memo } from 'react';

/**
 * useCallback is a React hook that memoizes a function, ensuring it doesn't get re-created on every render.
 * It is useful for optimizing performance, especially when passing callback functions to child components or as dependencies to useEffect.
 *
 * Prevent unnecessary rendering of the child component when the parent component re-renders.
 */


// memo() ensures that Btn only re-renders when its props change
const Btn = memo(({ onButtonClick }: { onButtonClick: () => void }) => {
  console.log('Rendering Btn');
  return <button onClick={onButtonClick}>Click me</button>;
});


/**
 * This example memoize function which is used in child component as prop (so the child component is not rendered when parent component is rendered)
 */
const ExampleUseCallback = () => {
  const [count, setCount] = useState(0);

  // memoizing a callback function
  const handleClick = useCallback(() => {
    alert('Button clicked');
  }, []); // the Btn component will be rendered if here is [count] dependency


  const handleClick2 = () => {
    alert('Button clicked2');
  };

  return (
    <div>
      <h1>useCallback Example</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <br></br><Btn onButtonClick={handleClick} />
    </div>
  );

};


export default ExampleUseCallback;



/*
 * Purpose: The Btn component does not re-render unnecessarily when count changes because the handleClick function is memoized.
 *
 * If handleClick is used the Btn will not be rendered when 'Increment Count' is clicked
 * If handleClick2 is used the Btn will be rendered when 'Increment Count' is clicked
 *
 * Explanation:
 * When 'Increment Count' is clicked the component is rendered due to setCount().
 * On every component render a new handleClick2 is created, and beacuse of that <Btn onButtonClick={handleClick2} /> is rendered.
 * Opposite to handleClick2 is handleClick which is memoized with useCallback() and new function is not created. The handleClick is not changed so <Btn onButtonClick={handleClick} /> will not be rendered.
 */
