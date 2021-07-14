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

export default function ImgMediaCard({ checked }) {
  const classes = useStyles();

  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Container className={classes.root}>
        <Grid container spacing={5}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <Card className={classes.card}>
                <CardContent className={classes.titleB}>
                  <Typography className={classes.title}>LA</Typography>
                </CardContent>
                <CardMedia
                  className={classes.media}
                  component='img'
                  alt='city'
                  image='assets/singapore.jpg'
                  title='LA'
                />
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Collapse>
  );
}
