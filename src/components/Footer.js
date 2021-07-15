import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  footer: {
    backgroundColor: '#fff176',
    padding: '50px 0',
    marginTop: '550px',
    position: 'fixed',
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <Typography variant='h6' align='center' gutterBottom>
        Web Design:
      </Typography>

      <Typography variant='subtitle1' align='center' color='textPrimary'>
        <a href='https://www.instagram.com/franklinsahlhoff/'>
          Franklin Sahlhoff{' '}
        </a>
        |<a href='https://github.com/jacktkell'> Jack Kelling </a>
      </Typography>
    </footer>
  );
};

export default Footer;
