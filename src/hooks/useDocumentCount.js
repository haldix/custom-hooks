import { useState, useEffect } from 'react';

// https://www.youtube.com/watch?v=5JSigy8E6vk

const useDocumentCount = () => {
  const initVal = localStorage.getItem('count')
    ? JSON.parse(localStorage.getItem('count')) * 1
    : 0;
  const [count, setCount] = useState(initVal);

  useEffect(() => {
    localStorage.setItem('count', JSON.stringify(count));
    document.title = `count: ${count.toString()}`;
    return () => {
      document.title = "Hal's Page";
    };
  }, [count]);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return {
    count,
    increment,
    decrement,
  };
};

export default useDocumentCount;
