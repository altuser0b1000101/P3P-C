import * as React from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + 'assets/LA.jpg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  },
  box: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  text: {
    color: '#FAFAFA',
    fontFamily: 'Zen Loop',
  },
}));

export default function Login() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box
        className={classes.box}
        component='form'
        sx={{
          '& > :not(style)': { m: 1, width: '45ch' },
        }}
        noValidate
        autoComplete='off'
      >
        <TextField
          className={classes.text}
          id='outlined-basic'
          label='email'
          variant='filled'
        />

        <TextField
          id='filled-password-input'
          label='Password'
          type='password'
          autoComplete='current-password'
          variant='filled'
        />
      </Box>
    </div>
  );
}
