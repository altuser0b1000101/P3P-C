import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core';
import Card from './Card';
import useWindowPositions from '../hook/useWindowPositions';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function City() {
  const [getCity, setCity] = useState([]);
  const checked = useWindowPositions('header');

  useEffect(() => {
    const apiFetch = async () => {
      const res = await fetch(`http://localhost:9393/`);
      const resData = await res.json();
      setCity(resData.getCity);
    };
    apiFetch();
  }, []);

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Card checked={checked} />
    </div>
  );
}
