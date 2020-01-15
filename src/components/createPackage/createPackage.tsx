import React, { useState} from 'react'
import { withStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import theme from '../../theme'
import Typography from '@material-ui/core/Typography'

const CreatePackage = (props: any) => {
  const { classes } = props
  const [selectedImages, selectImages] = useState(null)
  console.log(selectedImages);

  return(
    <React.Fragment>
      {selectedImages  && <img className={classes.previewImg} src={URL.createObjectURL(selectedImages)} alt='image' />}
      <Box className={classes.fileSelectorHolder}>
        <Box boxShadow={4} className={classes.uploadButton}><Typography>Add Photos</Typography></Box>
        <input className={classes.fileSelector} onChange={(e: any) => selectImages(e.target.files[0])} type='file' />
      </Box>
    </React.Fragment>
  )
}

export default withStyles({
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
    height: 100
  }
})(CreatePackage)
