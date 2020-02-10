import React from 'react'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home';
import { withStyles } from '@material-ui/styles'
import theme from '../../theme'
import Link from 'next/link'

const MiniNav = (props: any) => {
  const { classes } = props
  return(
    <div className={classes.container}>
      <Link href={{ pathname: '/'}}>
        <a className={classes.link}>
          <HomeIcon />
        </a>
      </Link>
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
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
  }
})(MiniNav)
