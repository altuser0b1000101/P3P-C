import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { CssBaseline } from '@material-ui/core';
import Input from '@material-ui/core/Input';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/mountain.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  appbarWrapper: {
    color: 'black',
    fontFamily: 'Zen Loop',
    fontSize: '60px',
    marginLeft: '1500px',
  },
}));

export default function Login({ setUserData }) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const routes = ['/login', '/home'];

  let history = useHistory();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:9393/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
      }),
    })
      .then((data) => data.json())
      .then((newUser) => {
        setUserData(newUser);
        history.push('/profile');
        console.log(newUser);
      });
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar>
        <Button
          className={classes.appbarWrapper}
          aria-controls='simple-menu'
          aria-haspopup='true'
          onClick={handleClick}
          to={routes[1]}
          value={routes[1]}
          component={Link}
        >
          Home
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
      <form onSubmit={handleSubmit}>
        <Box
          className={classes.box}
          component='form'
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete='off'
        >
          <TextField
            id='outlined-basic'
            label='Name'
            variant='filled'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Email'
            variant='filled'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Box>
        <input className={classes.button} type='submit' value='Submit' />
      </form>
    </div>
  );
}
