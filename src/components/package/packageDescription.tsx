import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from './table'
import theme from '../../theme'

const PackageDescription = (props: any) => {
  const { classes, pack, user} = props

  return (
    <Box>
      <meta property="og:title"              content={pack.name} />
      <meta property="og:description"              content={pack.smallDescription} />
      <Typography variant="h4">{pack.name}</Typography>
      <Typography variant="caption">{pack.smallDescription}</Typography>
      <Box className={classes.priceAndButtonContainer}>
        <Box className={classes.priceTag}>
          <Typography className={classes.priceText}>₹{pack.price}</Typography>
        </Box>
        <Button className={classes.bookNow} onClick={() => {
          console.log(user);

          if (!user || !user.user) {
              if (document.getElementById('signInClick')) {
                // @ts-ignore: Object is possibly 'null'.
                document.getElementById('signInClick').click()
              }
          }
        }}>
          <Typography className={classes.bookNowText}>{user && user.user ? 'Book Now' : 'Sign In to Book' }</Typography>
        </Button>
      </Box>
      <Table data={pack} />
    </Box>
  )
}

export default withStyles({
  priceTag: {
    width: 'fit-content',
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(0.2),
    paddingBottom: theme.spacing(0.2),
    borderRadius: 30,
    //  backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,
  },
  priceText: {
    ...theme.typography.h6,
  },
  bookNow: {
    width: 'fit-content',
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(0.2),
    paddingBottom: theme.spacing(0.2),
    borderRadius: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    textTransform: 'none',
  },
  bookNowText: {
    ...theme.typography.subtitle2,
    fontWeight: 'bold',
  },
  priceAndButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
})(PackageDescription)
