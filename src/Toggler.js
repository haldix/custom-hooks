import React from 'react';
import useToggle from './hooks/useToggle';

const Toggler = () => {
  const [isHappy, setisHappy] = useToggle();
  const [fruit, setFruit] = useToggle();
  return (
    <div>
      <h2>{isHappy ? 'Happy' : 'Sad'}</h2>
      <button onClick={setisHappy}>Toggle Happy</button>
      <h2>{fruit ? 'orange' : 'pear'}</h2>
      <button onClick={setFruit}>Fruit</button>
    </div>
  );
};

export default Toggler;
