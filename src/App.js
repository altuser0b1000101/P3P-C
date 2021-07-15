import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import LA from './components/La';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import Home from './Home';
import Profile from './components/Profile';
import { LoginContext } from './components/LoginContext';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn }}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path='/home' component={Home} strict />
          <Route path='/subscribe' component={Subscribe} strict />
          <Route path='/login' component={Login} strict />
          <Route path='/city_guide' component={LA} strict />
          <Route path='/user/home' component={Profile} strict />
        </Switch>
      </Router>
    </LoginContext.Provider>
  );
}
