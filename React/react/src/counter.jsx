import React, { useState, useEffect } from 'react';
import './counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startCounter = () => {
    setIsRunning(true);
  };

  const stopCounter = () => {
    setIsRunning(false);
  };

  const resetCounter = () => {
    setCount(0);
    setIsRunning(false);
  };

  return (
    <div className="container">
      <div className='container-cont'>
      <h1 className='counter-value'>Contador: {count}</h1>
      <button className='start' onClick={startCounter} disabled={isRunning}>
        Iniciar Contador
      </button>
      <button className='stop' onClick={stopCounter} disabled={!isRunning}>
        Parar Contador
      </button>
      <button className='restart' onClick={resetCounter}>
        Reiniciar Contador
      </button>
      </div>
    </div>
  );
};

export default Counter;
