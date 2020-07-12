import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Banner from '../components/common/banner'
import TravelCards from '../components/travelCard/travelCardsContainer'
import HolidayCards from '../components/travelCard/holidayCardsContainer'
import Footer from '../components/common/footer'
import Button from '@material-ui/core/Button'
import { withStyles } from '@material-ui/styles'
import theme from '../theme'
import Link from 'next/link'

const HomePage = (props: any) => {
  const { classes, user, packages, destinations } = props
  return (
    <div>
      <NavLogin user={user} />
      <NavBar />
      <MiniNav />
      <Banner />
      <div className={classes.travelCard}>
        <TravelCards data={packages} />
        <div className={classes.seeAll}>
          <Link href='/packages'>
          <a className={classes.anchor}>
          <Button variant="contained" color="primary">
            See all
          </Button>
          </a>
          </Link>
        </div>
      </div>
      <HolidayCards data={destinations} />
      <Footer />
    </div>
  )
}

export default withStyles({
  travelCard: {
    marginTop: -100,
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  seeAll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  anchor: {
    textDecoration: 'none'
  }
})(HomePage)
