import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
//import Button from '@material-ui/core/Button'
//import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Table from './table'
import theme from '../../../theme'


const PackageDescription = (props: any) => {
  const { classes, pack } = props
  return(
    <Box>
      <TextField
        className={classes.title}
         id="standard-multiline-flexible"
         label="Name"
         value={pack.name}
      //   onChange={handleChange}
       />
        <TextField label="Small description" className={classes.smallDescription} value={pack.smallDescription}/>
      <Box className={classes.priceAndButtonContainer}>
        <Box className={classes.priceTag}><TextField label="Price" value={pack.price}/></Box>
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
    paddingTop: theme.spacing(.2),
    paddingBottom: theme.spacing(.2),
    borderRadius: 30,
  //  backgroundColor: theme.palette.secondary.light,
    color: theme.palette.primary.dark,

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
  },
  title: {
    width: '100%'
  },
  smallDescription: {
    ...theme.typography.caption,
    width: '100%',
    marginTop: theme.spacing(1)
  }
})(PackageDescription)
