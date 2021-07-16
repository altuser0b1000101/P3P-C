import React, { useState, useContext } from 'react';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

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
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  avatar: {
    backgroundColor: theme.palette.secondary.main,
  },
  appbarWrapper: {
    color: 'black',
    fontFamily: 'Zen Loop',
    fontSize: '60px',
    marginLeft: '1500px',
  },
  // paper: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   fontFamily: 'Zen Loop',
  // },
}));

export default function Subscribe({ setUserData }) {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const routes = ['/home'];
  let history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    fetch(`http://localhost:9393/users`, {
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
          to={routes[0]}
          value={routes[0]}
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
        <input
          className={classes.button}
          type='submit'
          value='Submit'
          to='/user/profile'
        />
      </form>
    </div>
  );
}
