import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Banner from '../components/common/banner'
import TravelCards from '../components/travelCard/travelCardsContainer'
import HolidayCards from '../components/travelCard/holidayCardsContainer'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
import theme from '../theme'
const HomePage = (props: any) => {
  const { classes, user, packages, destinations } = props
  console.log(props)
  return(
    <div>
      <NavLogin user={user}/>
      <NavBar />
      <MiniNav />
      <Banner />
      <div className={classes.travelCard}>
        <TravelCards data={packages} />
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
      marginTop: 0
    }
  }
})(HomePage)
