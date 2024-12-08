import { useState, useEffect } from 'react';



/**
 * useEffect is a React hook that allows you to perform side effects in functional components, such as fetching data, manipulating the DOM, or setting up subscriptions.
 * It runs after every render or when specific state or props change.
 */
const ExampleUseEffect = () => {
  const [seconds, setSeconds] = useState<number>(0);

  // This useEffect will run every time 'seconds' changes
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    // Cleanup function to clear the interval when the component unmounts or re-renders
    return () => {
      console.log('Componenet ExampleUseEffect is destroyed.');
      clearInterval(timer);
    };
  }, []); // Empty array means this effect only runs once after the first render - The empty array can be omitted.


  return (
    <>
      <h1>Example: useEffect</h1>
      <div>Time: {seconds} seconds</div>
    </>
  );

};


export default ExampleUseEffect;
