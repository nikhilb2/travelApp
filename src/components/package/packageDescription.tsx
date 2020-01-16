import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from './table'
import theme from '../../theme'

const tableData = {
  inclusions: ['Flight Tickets', 'Transfers', 'Hotel', 'Sight Seeings', 'Breakfast'],
  exclusions: ['Visa', 'Lunch', 'Dinner']
}

const PackageDescription = (props: any) => {
  const { classes } = props
  return(
    <Box>
      <title>
        <Typography variant='h4'>Luxury Phuket Phi Phi</Typography>
      </title>
        <Typography variant='caption'>Luxury Phuket Phi Phi Luxury Phuket Phi Phi Luxury Phuket Phi PhiLuxury Phuket Phi PhiLuxury Phuket Phi Phi</Typography>
      <Box className={classes.priceAndButtonContainer}>
        <Box className={classes.priceTag}><Typography className={classes.priceText}>₹50000.00</Typography></Box>
        <Button className={classes.bookNow}><Typography className={classes.bookNowText}>Book Now</Typography></Button>
      </Box>
      <Table data={tableData} />
    </Box>
  )
}

export default withStyles({
  priceTag: {
    width: 'fit-content',
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(.2),
    paddingBottom: theme.spacing(.2),
    borderRadius: 30,
  //  backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,

  },
  priceText: {
    ...theme.typography.h6
  },
  bookNow: {
    width: 'fit-content',
    marginTop: theme.spacing(1),
    paddingRight: theme.spacing(1),
    paddingLeft: theme.spacing(1),
    paddingTop: theme.spacing(.2),
    paddingBottom: theme.spacing(.2),
    borderRadius: 30,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
    textTransform: 'none'
  },
  bookNowText: {
    ...theme.typography.subtitle2,
    fontWeight: 'bold'
  },
  priceAndButtonContainer: {
    display: 'flex',
    flexDirection: 'row'
  }
})(PackageDescription)
