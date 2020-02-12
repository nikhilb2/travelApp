import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ImageViewer from './imageViewer'
import PackageDescription from './packageDescription'
import theme from '../../theme'

const PackageContainer = (props: any) => {
  const { classes, pack } = props
  console.log(pack);

  return(
    <Box className={classes.root}>
      <article>
        <section>
          <Box boxShadow={4} className={classes.imageAndDescriptionContainer}>
            <Box className={classes.leftSide}>
              <ImageViewer images={pack.images} />
            </Box>
            <Box className={classes.rightSide}>
              <PackageDescription pack={pack}/>
            </Box>
          </Box>
        </section>
        <section>
          <Box boxShadow={4} className={classes.description}>
            <Typography className={classes.detailsHeading} variant='h6'>
              Details
            </Typography>
            <Typography className={classes.descriptionText}>
              {pack.description}
            </Typography>
          </Box>
        </section>
      </article>
    </Box>
  )
}

export default withStyles({
  root: {
    width: '95%'
  },
  imageAndDescriptionContainer: {
    display: 'flex',
    flexDirection: 'row',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
      width: '100%'
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
    },
    width: '60%'
  },
  description: {
    margin: theme.spacing(1),
    width: '80%',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    },
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
