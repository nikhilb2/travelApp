import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import DeleteIcon from '@material-ui/icons/Delete'
import Link from 'next/link'
import Dialog from '../common/dialog'
import theme from '../../theme'

const useStyles = makeStyles({
  card: {
    width: 300,
    margin: theme.spacing(2),
  },
  media: {
    height: 150,
  },
  heading: {
    lineHeight: 1.2,
  },
  price: {
    backgroundColor: 'rgba(0,0,0, 0.5)',
    color: theme.palette.primary.light,
    width: 'fit-content',
    padding: theme.spacing(0.2),
  },
  miniDescription: {
    marginTop: theme.spacing(1),
  },
  cardContent: {
    height: 120,
  },
  anchor: {
    textDecoration: 'none',
    color: 'inherit',
  },
})

export default function MediaCard(props: any) {
  const classes = useStyles()
  const { data, edit, deletePacakage } = props
  console.log(data)
  const [deletePressed, setDeletePressed] = useState(false)
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <Link
          href={{
            pathname: `${edit ? '/admin/packages/edit' : '/package'}`,
            query: { id: data.id },
          }}
        >
          <a className={classes.anchor}>
            <CardMedia
              className={classes.media}
              image={
                data.images[0]
                  ? 'https://images.myrespawn.com/travel-api/' + data.images[0].thumb
                  : '/static/phi.jpg'
              }
              title={data.name}
              children={
                <Typography className={classes.price}>₹{data.price}</Typography>
              }
            />
            <CardContent className={classes.cardContent}>
              <Typography className={classes.heading} variant="subtitle1">
                {data.name}
              </Typography>
              <Typography
                className={classes.miniDescription}
                variant="caption"
                color="textSecondary"
                component="p"
              >
                {data.smallDescription}
              </Typography>
            </CardContent>
          </a>
        </Link>
      </CardActionArea>
      {edit && (
        <DeleteIcon
          onClick={() => setDeletePressed(true)}
          style={{ color: 'red' }}
        />
      )}
      <Dialog
        open={deletePressed}
        title={`Delete package`}
        detail={`Click confirm to delete package ${data.name}`}
        onConfirm={deletePacakage}
        onCancel={() => setDeletePressed(false)}
      />
    </Card>
  )
}
