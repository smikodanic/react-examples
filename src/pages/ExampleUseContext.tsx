import { useContext } from 'react';
import { ThemeContext } from '../react/context/ThemeContext'; // Adjust the path as needed


/**
 * useContext is a React hook that allows you to access values from React Context directly within a component.
 * React Context is a way to share data between components without having to pass props down manually at every level.
 */
const ExampleUseContext = () => {
  const theme = useContext(ThemeContext);

  return (
    <>
      <h1>Example: useContext</h1>
      <div>The current theme is <b>{theme}</b></div>
    </>
  );
};

export default ExampleUseContext;
