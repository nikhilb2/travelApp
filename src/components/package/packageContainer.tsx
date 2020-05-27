import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ImageViewer from './imageViewer'
import PackageDescription from './packageDescription'
import theme from '../../theme'
import { capitalize } from '../../utility'
const PackageContainer = (props: any) => {
  const { classes, pack } = props
  console.log(pack);
  let description = []
  if (pack) {
    description = pack.description.split('#*')
  }
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
            {description && description.map((item: any) =>{
              const des  = item.split('%$')
              return(
                <Box className={classes.descriptionHolder} boxShadow={1}>
                <Typography style={{fontWeight: 'bold'}} className={classes.descriptionTextTitle}>
                  {capitalize(des[0] ? des[0] : ' ')}
                </Typography>
                  <Typography className={classes.descriptionText}>
                  {des[1]}
                  </Typography>
                  </Box>
              )
            }
            )}
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
//    padding: theme.spacing(1)
    marginTop: theme.spacing(1)
  },
  descriptionTextTitle: {
//    padding: theme.spacing(1)
  backgroundColor: theme.palette.primary.dark,
  color: theme.palette.primary.light,
  textAlign: 'center',
  borderRadius: 9
  },
  detailsHeading: {
  //  paddingBottom: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
  descriptionHolder: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    padding: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
})(PackageContainer)
