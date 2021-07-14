import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Collapse from '@material-ui/core/Collapse';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import CityLa from './CityLa';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const useStyles = makeStyles({
  root: {
    background: 'transparent',
  },
  title: {
    fontFamily: 'Zen Loop',
    color: 'black',
    fontWeight: 'bold',
  },
  titleB: {
    background: '#999',
  },
});

export default function ImgMediaCard({ checked, city, key }) {
  const classes = useStyles();

  const routes = [`/details/city`];

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Container className={classes.root}>
        <Grid container spacing={5}>
          {city.map((city) => (
            <Grid item key={key} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.titleB}>
                  <Typography className={classes.title}>{city.name}</Typography>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  component='img'
                  alt='city'
                  image={city.image_url}
                  title='LA'
                />
                <CardActions>
                  <Button
                    size='small'
                    color='primary'
                    value={routes[0]}
                    component={Link}
                    to={`/details/city_guide`}
                  >
                    details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Collapse>
  );
}
