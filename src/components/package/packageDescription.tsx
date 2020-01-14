import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Table from './table'

const tableData = {
  inclusions: ['Flight Tickets', 'Transfers', 'Hotel', 'Sight Seeings', 'Breakfast'],
  exclusions: ['Visa', 'Lunch', 'Dinner']
}

const PackageDescription = () => {

  return(
    <Box>
      <Typography variant='h4'>Luxury Phuket Phi Phi</Typography>
      <Typography variant='caption'>Luxury Phuket Phi Phi Luxury Phuket Phi Phi Luxury Phuket Phi PhiLuxury Phuket Phi PhiLuxury Phuket Phi Phi</Typography>
      <Table data={tableData} />
    </Box>
  )
}

export default withStyles({

})(PackageDescription)
