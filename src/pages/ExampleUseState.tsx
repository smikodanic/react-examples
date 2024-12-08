import { useState } from 'react';

/* useState - update counter and re-render component */
const ExampleUseState = () => {
  console.log('ExampleUseState'); // will be printed on every component render
  const [counter, setCounter] = useState<number>(1);

  const handleClick = () => {
    setCounter(counter + 1);
  };

  return (
    <>
      <h1>Example: useState</h1>
      <button onClick={handleClick}>INCREMENT</button>
      <p>counter: {counter}</p>
    </>
  );
};

export default ExampleUseState;
