import React from 'react'
import theme from '../../theme'
import { withStyles } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button'

const styles = {
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.primary.main
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    maxWidth: theme.spacing(10)
  }
}

const NavBar = (props: any) => {
  const { classes } = props
  return(
    <div className={classes.root}>
      <AppBar position="static" color={'inherit'} elevation={0}>
        <Toolbar>
        <Button color="primary">
          <img className={classes.logo} src="static/sbmc.png" alt="bmc" />
        </Button>
          <Typography variant="h6" className={classes.title}>

          </Typography>
          <Button color="inherit">Enquire Now</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}


export default withStyles(styles)(NavBar)
