import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/LA.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  title: {
    fontSize: 1000,
    color: 'black',
  },
  user: {
    display: 'flex',
    justifyContent: 'center',

    textAlign: 'center',
  },
  appbar: {
    background: 'none',
    fontFamily: 'Zen Loop',
    color: '#FAFAFA',
    flexGrow: '1',
    textAlign: 'center',
    fontSize: '70px',
  },
  text: {
    fontFamily: 'Zen Loop',
    color: '#FAFAFA',
    flexGrow: '1',
    textAlign: 'center',
    fontSize: '70px',
  },
  appbarWrapper: {
    width: '80%',
    margin: '0 auto',
  },
}));

const routes = ['/home'];

const Profile = ({ userData }) => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Toolbar className={classes.appbarWrapper}>
        <Button
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
      <nav className={classes.appbar}>Welcome {userData.name}</nav>
      <p className={classes.text}>thanks for joining cultura</p>
    </div>
  );
};

export default Profile;
