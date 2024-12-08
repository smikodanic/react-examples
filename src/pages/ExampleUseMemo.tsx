import { useState, useMemo } from 'react';


/**
 * useMemo is a React hook that optimizes performance by memoizing the result of an expensive calculation,
 * so it doesn’t need to be recalculated on every render unless its dependencies change.
 */
const ExampleUseMemo = () => {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);

  console.log('ExampleUseMemo component render');

  // Expensive calculation memoized with useMemo
  const sumResult = useMemo(() => {
    console.log('Calculating...');
    return a + b;
  }, [b]); // Recalculate only when 'b' dependency changes



  return (
    <div>
      <h1>Example: useMemo</h1>
      First set a, then set b. When b is set make render. Prevent calculation when a is set.
      <br></br>
      <br></br><button onClick={() => setA(a + 1)}>Increment "a" ({a})</button>  - will render component due to setA, but will not execute function within useMemo()
      <br></br>
      <br></br><button onClick={() => setB(b + 1)}>Increment "b" ({b})</button> - will render component, and will execute function within useMemo
      <p>sumResult: {sumResult}</p>
    </div>
  );

};


export default ExampleUseMemo;
