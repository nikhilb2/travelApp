import React from 'react'
import { withStyles } from "@material-ui/core/styles"
import SearchBox from './searchBox'
import Typography from '@material-ui/core/Typography';

const Banner = (props: any) => {
  const { classes } = props
  return(
    <div className={classes.root}>
      <div className={classes.image} style={{ backgroundImage: `url("static/trip.jpg")` }}>
        <div className={classes.searchBoxHolder}>
          <SearchBox />
        </div>
        <div>
      <div className={classes.bottomDescriptionContainer}>
        <Typography className={classes.descriptionText}>
          Hey wanderer, planning to visit India? Well you are at the right place as we customize tours to India and international trips. Not that we are boasting, but all our itineraries are tailor-made so you have a lot to experiment. Choose from our handpicked tour packages or let our 100+ experts plan dreamlike Indian holidays for you. If you are traveling to India for the first time, take a look at our meticulously crafted 'India for First Timers' tour packages.
        </Typography>
      </div>
      </div>
      </div>
    </div>
  )
}

export default withStyles({
  root: {

  },
  image: {
    //backgroundImage: `url("static/trip.jpg")`,
    width: '100%',
    height: '400px',
    backgroundSize: 'cover',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
    //backgroundColor: #cccccc,
  },

  bottomDescriptionContainer: {
    backgroundColor: 'rgba(0,0,0, 0.8)',
    width: '100%'
  },
  searchBoxHolder: {
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto'

  },
  descriptionText: {
    padding: '.5rem',
    marginRight: '2rem',
    marginLeft: '2rem',
    color: 'white',
    textAlign: 'center',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
})(Banner)
