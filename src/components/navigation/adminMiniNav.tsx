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
      <Button className={classes.button} onClick={() => selectMenu('packages')} color='inherit'>
        Packages
      </Button>
      <Button className={classes.button} onClick={() => selectMenu('editpackage')} color='inherit'>
        Edit Package
      </Button>
    </div>
  )
}

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'left',
    backgroundColor: 'black',
    color: theme.palette.primary.light,
  },
  button: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(4)
  },
  home: {
    marginTop: 'auto',
    marginBottom  : 'auto',
    marginLeft  : theme.spacing(2)
  }
})(MiniNav)
