import React from 'react'
import ImageSelector from './imageSelector'
import CreatePackageForm from './createPackageForm'
import Box from '@material-ui/core/Box'

const CreatePackage = () => {

  return(
    <Box>
      <ImageSelector />
      <CreatePackageForm />
    </Box>
  )
}

export default CreatePackage
