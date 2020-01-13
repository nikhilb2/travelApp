import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ImageViewer from './imageViewer'
import PackageDescription from './packageDescription'


const PackageContainer = (props: any) => {
  const { classes } = props
  return(
    <div className={classes.root}>
      <ImageViewer />
      <PackageDescription />
    </div>
  )
}

export default withStyles({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%'
  }
})(PackageContainer)
