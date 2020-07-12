import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from './table'
import theme from '../../theme'

const PackageDescription = (props: any) => {
  const { classes, pack } = props
  return (
    <Box>
      <Typography variant="h4">{pack.name}</Typography>
      <Typography variant="caption">{pack.smallDescription}</Typography>
      <Box className={classes.priceAndButtonContainer}>
        <Box className={classes.priceTag}>
          <Typography className={classes.priceText}>₹{pack.price}</Typography>
        </Box>
        <Button className={classes.bookNow}>
          <Typography className={classes.bookNowText}>Book Now</Typography>
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
