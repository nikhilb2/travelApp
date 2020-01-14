import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import AdminMiniNav from '../components/navigation/adminMiniNav'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
//import theme from '../theme'

const PackagePage = (props: any) => {
  const { user } = props
  console.log(props)
  return(
    <div>
      <NavLogin user={user}/>
      <NavBar />
      {user && user.user && user.user.id === '69'
        ? <AdminMiniNav />
        : <MiniNav />
      }
      {user && user.user && user.user.id === '69'
        ? <Typography>
          Welcome
        </Typography>
        : <Typography>
          Error 404 Page not found
        </Typography>
      }
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
