import React from 'react'
import Typography from '@material-ui/core/Typography'
import Link from 'next/link'
import HomeIcon from '@material-ui/icons/Home'
import { withStyles } from '@material-ui/styles'
import theme from '../../theme'

const MiniNav = (props: any) => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <HomeIcon className={classes.home} />
      <Link href={{ pathname: '/admin/packages' }}>
        <a>
          <Typography className={classes.button} color="inherit">
            Packages
          </Typography>
        </a>
      </Link>
      <Link href={{ pathname: '/admin/packages/edit' }}>
        <a>
          <Typography className={classes.button} color="inherit">
            Edit Package
          </Typography>
        </a>
      </Link>
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
    marginLeft: theme.spacing(4),
    color: theme.palette.primary.light,
  },
  home: {
    marginTop: 'auto',
    marginBottom: 'auto',
    marginLeft: theme.spacing(2),
  },
  anchorDecoration: {
    textDecoration: 'none',
  },
})(MiniNav)
