import { useReducer } from 'react';


/**
 * useReducer is a React hook that manages more complex state logic compared to useState.
 * It’s ideal for scenarios where the state transitions involve multiple actions or complex updates.
 */
const ExampleUseReducer = () => {
  const reducer = (state: number, action: string): number => {
    switch (action) {
      case 'increment':
        return state + 1;
      case 'decrement':
        return state - 1;
      case 'reset':
        return 0;
      default:
        throw new Error('Unknown action type');
    }
  };


  // useReducer hook
  const [count, dispatch] = useReducer(reducer, 0); // Initial state is 0


  return (
    <div>
      <h1>Example: useReducer</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
      <p>Count: {count}</p>
    </div>
  );
};


export default ExampleUseReducer;
