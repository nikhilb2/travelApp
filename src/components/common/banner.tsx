import React from 'react'
import { withStyles } from "@material-ui/core/styles"


const Banner = (props: any) => {
  const { classes } = props
  return(
    <div className={classes.root}>
      <img  className={classes.image} src='static/trip.jpg' alt='trip' />
    </div>
  )
}

export default withStyles({
  root: {

  },
  image: {
    width: '100vw'
  }
})(Banner)
