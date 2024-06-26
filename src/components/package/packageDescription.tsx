import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Table from './table'
import theme from '../../theme'
import { fetchRequest } from '../../utils/request'

const PackageDescription = (props: any) => {
  const { classes, pack, user} = props
  const createPaytm =  async () => {
    const result = await fetchRequest('create_paytm_txn.php', {
      method: 'GET'
    }, true)
    if (!result.error) {
      window.location.replace(`http://images.myrespawn.com/travel-api/paytmPayment.php?orderid=${result.data.id}&customerid=${user.user.id}&txnamount=${pack.price}`)

    } else {
      console.log(result);
    }
  }
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
          } else{
            createPaytm()
          }
        }}>
          <Typography className={classes.bookNowText}>{user && user.user ? 'Pay now' : 'Sign nn to Book' }</Typography>
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
