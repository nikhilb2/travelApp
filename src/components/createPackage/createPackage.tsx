import React, { useState } from 'react'
import ImageSelector from './imageSelector'
import CreatePackageForm from './createPackageForm'
//import Box from '@material-ui/core/Box'
import { fetchRequest } from '../../utils/request'

const insertPackage = async (data: any) => {
  console.log(data);

  const result = await fetchRequest('upload.php', {
    method: 'POST',
    body: data.images
  })
  console.log(result);

  return result
}



const CreatePackage = () => {

  const [ selectedImages, selectImages ] = useState(Array())
  const [ details, setDetails ] = useState({
    name: null,
    smallDescription: null,
    description: null,
    inclusions: null,
    exclusions: null,
    price: null
  })


  return(
    <React.Fragment>
      <ImageSelector selectImages={selectImages} selectedImages={selectedImages} />
      <CreatePackageForm
        setDetails={(newDetails: any) => {
          const det = Object.assign(details, newDetails)
          setDetails(det)
          }}
        insertPackage={() => insertPackage({data: {
          ...details,
          images: selectedImages
        }})}
      />
    </React.Fragment>
  )
}

export default CreatePackage
