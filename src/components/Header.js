import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FormButtons from './FormButtons';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Profile from './Profile';

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
    margin: 'auto',
    color: '#FAFAFA',
    fontSize: '60px',
  },
  textColor: {
    color: '#FAFAFA',
    fontFamily: 'Zen Loop',
    fontSize: '60px',
  },
}));

const routes = ['/profile'];

export default function Header() {
  const classes = useStyles();

  const [checked, setChecked] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <div className={classes.root} id='header'>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <nav className={classes.appbarTitle} to='/'>
            cultura
          </nav>
          <Button
            className={classes.textColor}
            aria-controls='simple-menu'
            aria-haspopup='true'
            onClick={handleClick}
            to={routes[0]}
            value={routes[0]}
            component={Link}
          >
            My Profile
          </Button>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Menu>
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
          <FormButtons />
        </div>
      </Collapse>
    </div>
  );
}
