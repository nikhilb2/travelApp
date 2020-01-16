import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ImageViewer from './imageViewer'
import PackageDescription from './packageDescription'
import theme from '../../theme'

const PackageContainer = (props: any) => {
  const { classes } = props
  return(
    <Box>
      <article>
        <section>
          <Box boxShadow={4} className={classes.imageAndDescriptionContainer}>
            <Box className={classes.leftSide}>
              <ImageViewer />
            </Box>
            <Box className={classes.rightSide}>
              <PackageDescription />
            </Box>
          </Box>
        </section>
        <section>
          <Box boxShadow={4} className={classes.description}>
            <Typography className={classes.detailsHeading} variant='h6'>
              Details
            </Typography>
            <Typography className={classes.descriptionText}>
              Phi phi island Phi phi islandPhi phi island  Phi phi islandPhiPhi phi islandPhi phi islandPhi phi island Phi phi island Phi phi islandPhi phi islandPhi phi island
              Phi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi islandPhi phi island
            </Typography>
          </Box>
        </section>
      </article>
    </Box>
  )
}

export default withStyles({
  imageAndDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column'
    },
    justifyContent: 'space-around',
    padding: theme.spacing(4),
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: theme.spacing(2)
  },
  leftSide: {
    width: '40%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
  },
  rightSide: {
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  description: {
    margin: theme.spacing(1),
    width: '80%',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  descriptionText: {
    padding: theme.spacing(1)
  },
  detailsHeading: {
  //  paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1)
  }
})(PackageContainer)
