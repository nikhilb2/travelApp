import React from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import theme from '../../theme'
import Typography from '@material-ui/core/Typography'

const CreatePackage = (props: any) => {
  const { classes, selectImages, selectedImages } = props
  //const [selectedImages, selectImages] = useState(Array())
  //console.log(selectedImages);
  const addToPhotos = (image: any) => {
    const newImages = [...selectedImages]
    newImages.push(...image)
    return newImages
  }
  return(
    <React.Fragment>
      <div className={classes.imageContainer}>
        {selectedImages.map((image: any, i: number) =>
          <div key={i + "image"}>
            <img className={classes.previewImg} src={URL.createObjectURL(image)} alt='image' />
          </div>)}
      </div>
      <Box className={classes.fileSelectorHolder}>
        <Box boxShadow={4} className={classes.uploadButton}><Typography>Add Photos</Typography></Box>
        <input className={classes.fileSelector} onChange={(e: any) => selectImages(addToPhotos(e.target.files))} type='file' multiple />
      </Box>
    </React.Fragment>
  )
}

export default withStyles({
  root: {
    width: '80%'
  },
  fileSelectorHolder: {
    position: 'relative'
  },
  fileSelector: {
    opacity: 0,
    position: 'absolute',
    top: 0,
    width: '100%',
    height: '100%'
  },
  uploadButton: {
    width: 'fit-content',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
    position: 'relative',
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.dark,
  },
  previewImg: {
    height: 100,
    marginRight: theme.spacing(1)
  },
  imageContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
})(CreatePackage)
