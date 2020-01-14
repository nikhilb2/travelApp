import React, {useState} from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import AdminMiniNav from '../components/navigation/adminMiniNav'
import CreatePackage from '../components/createPackage/createPackage'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
//import theme from '../theme'

const renderSelection = (menu: string) => {
  console.log(menu)
  switch(menu) {
    case "packages":
      return <CreatePackage />
    default:
      return (<Typography>
        Welcome
      </Typography>)
  }
}

const PackagePage = (props: any) => {
  const { user } = props
  console.log(props)
  const [selectedMenu, selectMenu] = useState('null')
  console.log(selectedMenu)
  return(
    <React.Fragment>
      <NavLogin user={user}/>
      <NavBar />
      {user && user.user && user.user.id === '69'
        ? <AdminMiniNav selectMenu={selectMenu}/>
        : <MiniNav />
      }
      {user && user.user && user.user.id === '69'
        ? renderSelection(selectedMenu)
        : <Typography>
          Error 404 Page not found
        </Typography>
      }
      <Footer />
    </React.Fragment>
  )
}

export default withStyles({
  packageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})(PackagePage)
