import React from 'react'
import theme from '../../theme'
import Box from '@material-ui/core/Box'
//import Typography from '@material-ui/core/Typography'
import Subscribe from './subscribe'
import SocialIcons from './socialIcons'
import { withStyles } from '@material-ui/core/styles'

const Footer = (props: any) => {
  const { classes } = props
  return(
    <Box className={classes.root}>
      <Subscribe />
      <div className={classes.socail}>
        <SocialIcons/>
      </div>
    </Box>
  )
}

export default withStyles({
  root: {
    backgroundColor: theme.palette.secondary.main
  },
  socail: {
    marginRight: 'auto',
    marginLeft: 'auto'
  }
})(Footer)
