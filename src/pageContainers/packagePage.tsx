import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import Footer from '../components/common/footer'
import PackageContainer from '../components/package/packageContainer'
import { withStyles } from '@material-ui/styles'
//import theme from '../theme'

const PackagePage = (props: any) => {
  const { user, classes, pack } = props
  return (
    <div>
      <NavLogin user={user} />
      <NavBar />
      <MiniNav />
      <div className={classes.packageContainer}>
        <PackageContainer pack={pack} />
      </div>
      <Footer />
    </div>
  )
}

export default withStyles({
  packageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})(PackagePage)
