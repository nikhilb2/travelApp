import React, { useState } from 'react'
import { withStyles } from '@material-ui/core/styles'
//import Typography from '@material-ui/core/Typography'
import theme from '../../theme'

const imageArray = ['static/phi.jpg', 'static/cat.jpg']

const ImageView = (props: any) => {
  const { classes } = props
  const [ selectedImage, changeImage ] = useState(imageArray[0])
  return(
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.selectedImageHolder}>
          <figure>
            <img src={selectedImage} alt ='selectedImage' className={classes.selectedImage}/>
          </figure>
        </div>
        <div className={classes.imageSelector}>
          {imageArray.map((image: string, i: number) => <div onClick={() => {
            changeImage(image)
          }} key={i}>
              <img className={ image === selectedImage ? classes.selectedImg : classes.img} src={image} alt={'img' + i} />
            </div>)}
        </div>
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
  //  border: `1px solid ${theme.palette.primary.dark}`
  },
  selectedImg: {
    height: 70,
    margin: theme.spacing(1),
    border: `2px solid ${theme.palette.primary.dark}`
  },
  imageSelector: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selectedImage: {
    height: 200
  },
  selectedImageHolder: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'  ,
    padding: theme.spacing(1)
  },
})(ImageView)
