import React from 'react'
import Typography from '@material-ui/core/Typography'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/styles'
import theme from '../../theme'
import Link from 'next/link'

const MiniNav = (props: any) => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <Link href={{ pathname: '/' }}>
        <a className={classes.link}>
          <HomeIcon />
        </a>
      </Link>
      <Link href={{ pathname: '/packages' }}>
        <a className={classes.link}>
          <Typography className={classes.item}>Packages</Typography>
        </a>
      </Link>
      <Link href={{ pathname: '/' }}>
        <a className={classes.link}>
          <Typography className={classes.item}>Destinations</Typography>
        </a>
      </Link>
      <Link href={{ pathname: '/contactus' }}>
        <a className={classes.link}>
          <Typography className={classes.item}>Contact us</Typography>
        </a>
      </Link>
    </div>
  )
}

export default withStyles({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    color: theme.palette.primary.light,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.light,
    marginLeft: theme.spacing(2)
  },
  item: {
    marginLeft: theme.spacing(4)

  }
})(MiniNav)
