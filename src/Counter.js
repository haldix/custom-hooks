import React from 'react';
import useDocumentCount from './hooks/useDocumentCount';
import useBackgroundColor from './hooks/useBackgroundColor';

const Counter = () => {
  const { count, increment, decrement } = useDocumentCount();
  useBackgroundColor('blue');
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => increment()}>+</button>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
};

export default Counter;
