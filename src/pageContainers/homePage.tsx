import React from 'react'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Banner from '../components/common/banner'
import TravelCards from '../components/travelCard/travelCardsContainer'


const HomePage = () => {

  return(
    <div>
      <NavBar />
      <MiniNav />
      <Banner />
      <TravelCards data={[1,2,3,5,6,7]} />
    </div>
  )
}

export default HomePage
