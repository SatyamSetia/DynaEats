import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import LoginForm from './components/LoginForm'
import Home from './components/Home'

function App() {
  return (
    <Router className="App">
      <header className="App-header">
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/" component={LoginForm}/>
        </Switch>
      </header>
    </Router>
  );
}

export default App;
