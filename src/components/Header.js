import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'Zen Loop',
  },
  appbar: {
    background: 'none',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
  appbarTitle: {
    flexGrow: '1',
    fontFamily: 'Zen Loop',
    fontSize: '70px',
  },
  icon: {
    color: '#fff',
    fontSize: '2rem',
  },
  container: {
    textAlign: 'center',
  },
  title: {
    fontFamily: 'Zen Loop',
    fontSize: '40px',
    color: '#FAFAFA',
  },
  iconDown: {
    color: '#FAFAFA',
    fontSize: '60px',
  },
}));

export default function Header() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>cultura</h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Collapse
        in={checked}
        {...(checked ? { timeout: 1000 } : {})}
        collapsedHeight={5}
      >
        <div className={classes.container}>
          <h1 className={classes.title}>
            A discerning selection of our favourite places to visit in each
            city.
            <br />
            Cultura Online City Guides are available to our subscribers.
          </h1>
          <IconButton>
            <ArrowDropDownIcon className={classes.iconDown}></ArrowDropDownIcon>
          </IconButton>
        </div>
      </Collapse>
    </div>
  );
}
