import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
//import theme from '../theme'

const PackagePage = (props: any) => {
  const { user } = props
  console.log(props)
  return(
    <div>
      <NavLogin user={user}/>
      <NavBar />
      <MiniNav />
      <Footer />
    </div>
  )
}

export default withStyles({
  packageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})(PackagePage)
