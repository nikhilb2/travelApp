import React, { useState } from 'react'
import ImageSelector from './imageSelector'
import CreatePackageForm from './createPackageForm'
//import Box from '@material-ui/core/Box'
import { requestUploadImage, fetchRequest } from '../../utils/request'
import Modal from '@material-ui/core/Modal';
import { withStyles } from '@material-ui/core/styles';
import theme from '../../theme'
import Loader from '../common/loader'

function getModalStyle() {
  const top = 50;
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const CreatePackage = (props: any) => {

  const [ selectedImages, selectImages ] = useState(Array())
  const [ alert, showAlert ] = useState(false)
  const [ message, setMessage ] = useState('')
  const [modalStyle] = React.useState(getModalStyle)
  const [ loader, setLoader ] = useState(false)
  const [ details, setDetails ] = useState({
    name: '',
    smallDescription: '',
    description: '',
    inclusions: '',
    exclusions: '',
    price: ''
  })

  const { classes } = props
  //console.log(details);
  const { name, smallDescription, description, inclusions, exclusions, price  } = details
  const insertPackage = async (data: any) => {
    if (name && smallDescription && description && inclusions && exclusions && price && data.images.length > 0) {

      setLoader(true)
    //  console.log(data.images);
      //let result = { data: { images: []} }
      //const hasPhotos = data.images && data.images.length >
      const result: any = await requestUploadImage(data.images)
      if (!result.error) {
        console.log(result);

        data.images = result.data.images
        const insertResult = await fetchRequest('create_package.php', {
          method: 'POST',
          body: JSON.stringify(data)
        }, true)

        if (insertResult.message === 'success') {
          setLoader(false)
          selectImages(Array())
          setDetails({
            name: '',
            smallDescription: '',
            description: '',
            inclusions: '',
            exclusions: '',
            price: ''
          })
          setMessage(insertResult.message)
          showAlert(true)
        } else if (insertResult.error) {
          setLoader(false)
          setMessage(insertResult.error)
          showAlert(true)
        }
        console.log(insertResult);
      }
    } else {
      setMessage('Something is missing')
      showAlert(true)
    }

  }




  return(
    <React.Fragment>
      <ImageSelector selectImages={selectImages} selectedImages={selectedImages} />
      <CreatePackageForm
        setDetails={(newDetails: any) => {
          console.log(newDetails)
          const det = Object.assign({}, details, newDetails)
          setDetails(det)
        }}
        details={details}
        insertPackage={() => insertPackage({
          ...details,
          images: selectedImages
        })}
      />
      {loader && <Loader /> }
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={alert}
        onClose={() => showAlert(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Status</h2>
          <p id="simple-modal-description">
            {message}
          </p>
        </div>
      </Modal>
    </React.Fragment>
  )
}

export default withStyles({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
})(CreatePackage)
