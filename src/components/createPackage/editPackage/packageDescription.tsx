import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
//import Button from '@material-ui/core/Button'
//import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import Table from './table'
import theme from '../../../theme'

const PackageDescription = (props: any) => {
  const {
    classes,
    pack,
    inclusions,
    exclusions,
    setInclusions,
    setExclusions,
    name,
    setName,
    smallDescription,
    setSmallDescription,
    price,
    setPrice,
  } = props
  return (
    <Box>
      <TextField
        className={classes.title}
        id="standard-multiline-flexible"
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Small description"
        id="smallDescription"
        className={classes.smallDescription}
        value={smallDescription}
        onChange={(e: any) => setSmallDescription(e.target.value)}
      />
      <Box className={classes.priceAndButtonContainer}>
        <Box className={classes.priceTag}>
          <TextField
            label="Price"
            id="price"
            type="number"
            value={price}
            onChange={(e: any) => setPrice(e.target.value)}
          />
        </Box>
      </Box>
      <Table
        data={pack}
        inclusions={inclusions}
        exclusions={exclusions}
        setExclusions={setExclusions}
        setInclusions={setInclusions}
      />
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
  title: {
    width: '100%',
  },
  smallDescription: {
    ...theme.typography.caption,
    width: '100%',
    marginTop: theme.spacing(1),
  },
})(PackageDescription)
