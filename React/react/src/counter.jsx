import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval = null;

    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const stopCounter = () => {
    setIsRunning(false);
  };

  return (
    <div className='container'>
        <div className="counter-container">
            <h1 className="counter-value">Contador: {count}</h1>
            <button onClick={stopCounter} className="stop-button">
            Parar Contador
            </button>
        </div>
    </div>
  );
};

export default Counter;
