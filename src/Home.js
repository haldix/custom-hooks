import React from 'react';
import SimpleFormInputHook from './SimpleFormInputHook';
import Toggler from './Toggler';

// https://www.youtube.com/watch?v=5JSigy8E6vk
// Colt STeele Udemy React Course, Custom hooks section

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Toggler />
      <SimpleFormInputHook />
    </div>
  );
};

export default Home;
