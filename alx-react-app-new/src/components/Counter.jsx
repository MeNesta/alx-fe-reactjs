import { useState } from 'react';

function Counter() {
  // Step 1: Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '30px' }}>
      <h2>React Counter App</h2>
      <p style={{ fontSize: '1.5rem' }}>Current Count: {count}</p>

      {/* Step 2: Create buttons with onClick handlers */}
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px' }}
      >
        Decrement
      </button>

      <button 
  onClick={() => setCount(count > 0 ? count - 1 : 0)} 
  style={{ padding: '10px 20px', margin: '5px', backgroundColor: 'orange', color: 'white', border: 'none', borderRadius: '5px' }}
>
  Decrement
</button>

    </div>
  );
}

export default Counter;
