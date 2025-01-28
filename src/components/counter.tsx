'use client'
import { useEffect, useState } from 'react';


interface CounterProps {
  target: number; // 'target' should be a number
}

export default function Counter ({ target }:CounterProps) {

  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 100;
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < target) {
          return Math.round(prevCount + increment);
        } else {
          clearInterval(interval);
          return target;
        }
      });
    }, 10);

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [target]);

  return (
    <div className="counter-container flex items-left justify-left  sm:flex-col flex-row">
      <div className="counter text-4xl font-bold">{count}+</div>
    
    </div>
  );
};