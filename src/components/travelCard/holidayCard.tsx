
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import theme from '../../theme'

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: theme.spacing(1)
  },
  media: {
    height: 140,
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="static/goa.jpg"
          title="Contemplative Reptile"
          children={<Button>
                  Goa
                </Button>}
        />
      </CardActionArea>
    </Card>
  );
}
