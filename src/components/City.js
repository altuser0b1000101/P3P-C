import React from 'react';
import { makeStyles } from '@material-ui/core';
import Card from './Card';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    // display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function () {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Card />
    </div>
  );
}
