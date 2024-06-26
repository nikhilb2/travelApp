import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
//import Typography from '@material-ui/core/Typography'
import theme from '../../../theme'

//const imageArray = ['static/phi.jpg', 'static/cat.jpg']

const ImageView = (props: any) => {
  const { classes, images } = props
  const [selectedImage, changeImage] = useState(
    images && images[0] && images[0].image ? images[0].image : '/static/phi.jpg'
  )
  return (
    <React.Fragment>
      <div className={classes.root}>
        <meta property="og:image" content={selectedImage} />
        <div className={classes.selectedImageHolder}>
          <figure>
            <img
              src={'https://images.myrespawn.com/travel-api/' + selectedImage}
              alt="selectedImage"
              className={classes.selectedImage}
            />
          </figure>
        </div>
        {images && images.length > 0 && (
          <div className={classes.imageSelector}>
            {images &&
              images.map((image: any, i: number) => (
                <div
                  onClick={() => {
                    changeImage(image.image)
                  }}
                  key={i}
                >
                  <img
                    className={
                      image.image === selectedImage
                        ? classes.selectedImg
                        : classes.img
                    }
                    src={'https://images.myrespawn.com/travel-api/' + image.image}
                    alt={'img' + i}
                  />
                </div>
              ))}
          </div>
        )}
      </div>
    </React.Fragment>
  )
}

export default withStyles({
  root: {
    //backgroundColor: theme.palette.primary.light
  },
  img: {
    height: 70,
    margin: theme.spacing(1),
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
    //  border: `1px solid ${theme.palette.primary.dark}`
  },
  selectedImg: {
    height: 70,
    [theme.breakpoints.down('sm')]: {
      height: 50,
    },
    margin: theme.spacing(1),
    border: `2px solid ${theme.palette.primary.dark}`,
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  selectedImage: {
    height: 200,
  },
  selectedImageHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: theme.spacing(1),
  },
})(ImageView)
