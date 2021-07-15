import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import LA from './components/La';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardContainer from './components/CardContainer';
import Subscribe from './components/Subscribe';
import Login from './components/Login';
import Home from './Home';

export default function App() {
  return (
    <div>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path='/home' component={Home} strict />
          <Route path='/subscribe' component={Subscribe} strict />
          <Route path='/login' component={Login} strict />
          <Route path='/city_guide' component={LA} strict />
        </Switch>
      </Router>
    </div>
  );
}
