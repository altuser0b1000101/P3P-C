import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/mountain.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
}));

const Profile = () => {
  const classes = useStyles();
  return (
    <>
      <h1></h1>
    </>
  );
};

export default Profile;
