
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme'

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  caption: {
    position: 'absolute',
    marginTop: -50,
    marginLeft: theme.spacing(1),
    padding: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0, 0.5)',
    color: 'white',
    borderRadius: theme.spacing(2)
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
        />
      </CardActionArea>
      <Typography className={classes.caption}>
        Goa
      </Typography>
    </Card>
  );
}
