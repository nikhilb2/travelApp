import React from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import AdminMiniNav from '../components/navigation/adminMiniNav'
import CreatePackage from '../components/createPackage/createPackage'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import theme from '../theme'


const AddPackage = (props: any) => {
  const { user, classes } = props
  console.log(props)
  return(
    <React.Fragment>
      <NavLogin user={user}/>
      <NavBar />
      {user && user.user && user.user.id === '69'
        ? <AdminMiniNav />
        : <MiniNav />
      }
      <Box className={classes.content} boxShadow={4}>
        {user && user.user && user.user.id === '69'
          ? <CreatePackage />
          : <Typography>
            Error 404 Page not found
          </Typography>
        }
      </Box>
      <Footer />
    </React.Fragment>
  )
}

export default withStyles({
  packageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  content: {
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(1),
  }
})(AddPackage)
