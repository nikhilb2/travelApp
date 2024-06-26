import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import theme from '../../theme'

const useStyles = makeStyles({
  card: {
    width: 345,
    margin: theme.spacing(1),
  },
  media: {
    height: 140,
  },
  label: {
    padding: theme.spacing(1),
    backgroundColor: 'rgba(0,0,0, 0.5)',
    color: theme.palette.primary.light,
  },
})

export default function MediaCard(props: any) {
  const { data } = props
  console.log(data)

  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://images.myrespawn.com/travel-api/${data.image}`}
          title={`${data.place}, ${data.country}`}
          children={
            <Typography className={classes.label}>{data.place}</Typography>
          }
        />
      </CardActionArea>
    </Card>
  )
}
