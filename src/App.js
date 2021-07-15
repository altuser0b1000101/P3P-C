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
// import LoginContext from './LoginContext';
import { createContext } from 'react-dom';

export default function App() {
  // const LoginContext = createContext(null);

  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          {/* <LoginContext.Provider value={null}> */}
          <Route path='/home' component={Home} strict />
          <Route path='/subscribe' component={Subscribe} strict />
          <Route path='/login' component={Login} strict />
          <Route path='/city_guide' component={LA} strict />
          <Route path='/profile' component={Profile} strict />
          {/* </LoginContext.Provider> */}
        </Switch>
      </Router>
    </>
  );
}
