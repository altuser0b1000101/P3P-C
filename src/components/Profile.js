import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/LA.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Profile = ({ userData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <h1>{userData.name}</h1>
    </div>
  );
};

export default Profile;
