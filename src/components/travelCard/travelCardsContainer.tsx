import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import TravelCard from './travelCard'


const TravelCardsConatainer = (props: any) => {
  const { classes, data } = props
  return(
    <div className={classes.root}>
      {data && data.map((card: number,i: number) => <div key={card+""+i}><TravelCard /></div>)}
    </div>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  }
})(TravelCardsConatainer)