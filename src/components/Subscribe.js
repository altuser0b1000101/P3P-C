import React, { useState } from 'react';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

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
}));

export default function Subscribe() {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

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
    }).then((res) => res.json());
  }

  return (
    <div className={classes.root}>
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
        <input type='submit' value='Submit' />
      </form>
    </div>
  );
}
