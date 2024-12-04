import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0); 
  const [timer, setTimer] = useState(false); 
  useEffect(() => {
    let countchange; 

    if (timer) {
    
      countchange = setInterval(() => {
        setCount((t) => t + 1);
      }, 1000);
    } else {
  
      clearInterval(countchange);
    }

    return () => clearInterval(countchange);
  }, [timer]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <p>Counter: {count}</p>
      <button onClick={() => setTimer(true)}>Start</button>
      <button onClick={() => setTimer(false)}>Stop</button>
    </div>
  );
}

export default Counter;
