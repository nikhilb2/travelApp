import React from 'react'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Search from '../components/common/searchBox'


const HomePage = () => {

  return(
    <div>
      <NavBar />
      <MiniNav />
      <Search />
    </div>
  )
}

export default HomePage
