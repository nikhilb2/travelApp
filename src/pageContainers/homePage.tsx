import React from 'react'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Banner from '../components/common/banner'
import TravelCards from '../components/travelCard/travelCardsContainer'
import HolidayCard from '../components/travelCard/holidayCard'
import { withStyles } from '@material-ui/styles'

const HomePage = (props: any) => {
  const { classes } = props
  return(
    <div>
      <NavBar />
      <MiniNav />
      <Banner />
      <div className={classes.travelCard}>
        <TravelCards data={[1,2,3,5,6,7]} />
      </div>
      <HolidayCard />
    </div>
  )
}

export default withStyles({
  travelCard: {
    marginTop: -100,
    padding: '1rem'
  }
})(HomePage)
