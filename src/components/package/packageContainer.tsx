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
      <ImageViewer />
      <PackageDescription />
    </Box>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    padding: theme.spacing(4)
  }
})(PackageContainer)
