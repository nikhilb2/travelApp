import React from 'react'
//import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/styles'
import theme from '../../theme'

const MiniNav = (props: any) => {
  const { classes, selectMenu} = props
  return(
    <div className={classes.container}>
      <HomeIcon className={classes.home}/>
      <Button onClick={() => selectMenu('packages')} color='inherit'>
        Packages
      </Button>
      <Button color='inherit'>
        Destinations
      </Button>
      <Button color='inherit'>
        Enquiries
      </Button>
      <Button color='inherit'>
        Bookings
      </Button>
    </div>
  )
}

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'black',
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      display: 'none'
    }
  },
  home: {
    marginTop: 'auto',
    marginBottom  : 'auto'
  }
})(MiniNav)
