import { useState, useRef, useLayoutEffect } from 'react';


/**
 * useLayoutEffect is a React hook similar to useEffect, but it runs synchronously after all DOM mutations and before the browser paints the screen.
 * It is primarily used when you need to measure or manipulate the DOM and ensure those changes are applied immediately to avoid visual discrepancies.
 * Here’s an example where useLayoutEffect is used to measure the size of an element:
 */
const ExampleUseLayoutEffect = () => {
  const [boxWidth, setBoxWidth] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);


  useLayoutEffect(() => {
    if (boxRef.current) {
      setBoxWidth(boxRef.current.offsetWidth); // Measure the box's width and update the state
    }
  }, []); // Runs only once after the DOM mutation


  return (
    <div>
      <h1>Example: useLayoutEffect</h1>
      <div
        ref={boxRef}
        style={{
          width: '50%',
          padding: '20px',
          backgroundColor: 'lightblue',
        }}
      >
        Resize the window, reload page and check the box width!
      </div>
      <p>Box Width: {boxWidth}px</p>
    </div>
  );

};


export default ExampleUseLayoutEffect;
