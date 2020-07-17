import React from 'react';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Counter from './Counter';
import Fetched from './Fetched';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <NavBar />
      <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route exact path='/counter' render={() => <Counter />} />
        <Route exact path='/fetched' render={() => <Fetched />} />
      </Switch>
    </div>
  );
}

export default App;
