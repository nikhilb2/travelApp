import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import theme from '../../theme'

const useStyles = makeStyles({
  card: {
    maxWidth: 150,
  },
  media: {
    height: 120,
  },
  heading: {
    lineHeight: 1.2
  },
  price: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    color: theme.palette.primary.light,
    width: 'fit-content',
    padding: theme.spacing(.2)
  },
  miniDescription: {
    marginTop: theme.spacing(1)
  },
  cardContent: {
    height: 120
  }
});

export default function MediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/phi.jpg"
          title="Contemplative Reptile"
          children={<Typography className={classes.price}>₹50000</Typography>}
        />
        <CardContent className={classes.cardContent}>
          <Typography className={classes.heading} variant="subtitle1" >
            Luxury Phuket Phi phi
          </Typography>
          <Typography className={classes.miniDescription} variant="caption" color="textSecondary" component="p">
            Experience 5 nights 4 days in luxurios resort in a peacefull resort in the jungles of phiphi island
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
