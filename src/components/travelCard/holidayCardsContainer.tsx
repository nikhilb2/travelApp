import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import HolidayCard from './holidayCard'
import theme from '../../theme'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const HolidayCardsHolder = (props: any) => {
  const { classes, data } = props
  return(
    <div className={classes.root}>
      <Box className={classes.textHolder} boxShadow={2}>
        <Typography variant="h4" className={classes.heading}>
          Seize the best from our fine as wine holiday ideas
        </Typography>
        <Typography variant="subtitle1" className={classes.heading}>
          Holidays in India are nothing short of a dream come true. The ultimate treasures of amazing experiences awaits here. As you set a foot in India, you will find yourselves in love. Let us help you have a memorable affair, browse through our sea of ideas and pick your pearl.
        </Typography>
      </Box>
      <div className={classes.cards}>
        {data && data.map((card: number) => <div key={card}><HolidayCard /></div>)}
      </div>
    </div>
  )
}

export default withStyles({
  root: {
    backgroundColor: theme.palette.primary.light,
    padding: theme.spacing(1)
  },
  cards: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  heading: {
    textAlign: 'center'
  },
  textHolder: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.primary.light
  }
})(HolidayCardsHolder)
