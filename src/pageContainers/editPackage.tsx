import React, {useState} from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import AdminMiniNav from '../components/navigation/adminMiniNav'
import EditPackage from '../components/createPackage/editPackage'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import theme from '../theme'


const EditPackagePage = (props: any) => {
  const { user, classes, pack } = props
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
          ? <EditPackage pack={pack}/>
          : <Box className={classes.content} boxShadow={4}>
              <Typography>
                Error 404 Page not found
              </Typography>
            </Box>
        }
      <Footer />
    </React.Fragment>
  )
}

export default withStyles({
  content: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  }
})(EditPackagePage)
