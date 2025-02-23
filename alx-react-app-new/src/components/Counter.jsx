// src/components/Counter.jsx
import React, { useState } from 'react';

function Counter() {
  // Initialize the state with 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Current Count: {count}</p>
      {/* Increment the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      {/* Decrement the count */}
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* Reset the count to 0 */}
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
