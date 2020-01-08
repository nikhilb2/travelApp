import React from 'react'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/styles'


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
    color: 'white'
  }
})(MiniNav)