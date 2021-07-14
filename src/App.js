import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import City from './components/CardContainer';
import CityLA from './components/CityLa';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import CardContainer from './components/CardContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/LA.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Router>
        <Route path='/home' component={App} strict />
        <Route path='/details/city/la' component={CityLA} strict />
        {/* <Route path='/details/city/florida' component={Florida} strict />
        <Route path='/details/city/miami' component={Miami} strict />
        <Route path='/details/city/dc' component={Dc} strict />
        <Route path='/details/city/chicago' component={Chicago} strict />
        <Route path='/details/city/denver' component={Devner} strict /> */}
        <Header />
        <CardContainer />
      </Router>
    </div>
  );
}
