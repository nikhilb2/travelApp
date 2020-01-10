import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import HolidayCard from './holidayCard'


const HolidayCardsHolder = (props: any) => {
  const { classes, data } = props
  return(
    <div className={classes.root}>
      {data && data.map((card: number) => <div key={card}><HolidayCard /></div>)}
    </div>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  }
})(HolidayCardsHolder)
