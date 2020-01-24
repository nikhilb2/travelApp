import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'

const Loader = (props: any) => {
  const { classes } = props
  return(
    <Box className={classes.root}>
      <img className={classes.image} src='/static/flight.gif' alt='loader' />
    </Box>
  )
}

export default withStyles({
  root: {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0, 0.8)',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  image: {
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})(Loader)
