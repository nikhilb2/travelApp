import React from 'react'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/styles'
import theme from '../../theme'

const MiniNav = (props: any) => {
  const { classes } = props
  return(
    <div className={classes.container}>
      <HomeIcon />
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
      <Typography>
        Menu
      </Typography>
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
  }
})(MiniNav)
