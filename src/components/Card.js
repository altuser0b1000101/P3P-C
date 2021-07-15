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
import La from './La';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import IconButton from '@material-ui/core/IconButton';

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

export default function Cards({ checked, city, key }) {
  const classes = useStyles();

  const routes = [`/city_guide`];

  return (
    <Router>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Container className={classes.root}>
          <Grid container spacing={5}>
            {city.map((city) => (
              <Grid item key={key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardContent className={classes.titleB}></CardContent>
                  <CardMedia
                    className={classes.media}
                    component='img'
                    alt='city'
                    image={city.image_url}
                    title='LA'
                  />
                  <Route
                    path='/'
                    render={(history) => (
                      <CardActions>
                        <IconButton aria-label='add to favorites'>
                          <FavoriteIcon />
                        </IconButton>

                        <Button
                          value={history.location.pathname}
                          size='small'
                          color='primary'
                          value={routes[0]}
                          component={Link}
                          to={'/city_guide'}
                        >
                          {city.name}
                        </Button>
                      </CardActions>
                    )}
                  />
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Collapse>
    </Router>
  );
}
