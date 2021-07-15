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

import { createContext } from 'react-dom';

export default function App() {
  const [userData, setUserData] = useState([]);

  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path='/home' component={Home} strict />

          <Route path='/subscribe'>
            <Subscribe setUserData={setUserData} />
          </Route>

          <Route path='/login'>
            <Login setUserData={setUserData} />
          </Route>

          <Route path='/city_guide' component={LA} strict />
          <Route path='/profile'>
            <Profile userData={userData} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}
