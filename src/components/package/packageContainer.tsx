import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import ImageViewer from './imageViewer'
import PackageDescription from './packageDescription'
import theme from '../../theme'

const PackageContainer = (props: any) => {
  const { classes } = props
  return(
    <Box className={classes.root}>
      <Box className={classes.leftSide}>
        <ImageViewer />
      </Box>
      <Box className={classes.rightSide}>
        <PackageDescription />
      </Box>
    </Box>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: theme.spacing(4)
  },
  leftSide: {
    width: '40%'
  },
  rightSide: {
    width: '60%'
  }
})(PackageContainer)
