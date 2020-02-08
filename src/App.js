import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

import './App.css';
import LoginForm from './components/LoginForm'
import Home from './components/Home'

function App(props) {
  let isAuthenticated = props.user!=null

  return (
    <Router className="App">
      <header className="App-header">
        <Switch>
          <Route
            path="/home"
            render={({ location }) =>
              isAuthenticated ? (
                <Home/>
              ) : (
                <Redirect
                  to={{
                    pathname: "/",
                    state: { from: location }
                  }}
                />
              )
            }
          />
          <Route path="/" component={LoginForm}/>
        </Switch>
      </header>
    </Router>
  );
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, null)(App);
