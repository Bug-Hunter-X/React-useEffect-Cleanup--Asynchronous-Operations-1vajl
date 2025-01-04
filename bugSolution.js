```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    // Start the timer
    timerRef.current = setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    // Cleanup function to clear the timer
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [count]); // Add count to dependency array

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default MyComponent;
```