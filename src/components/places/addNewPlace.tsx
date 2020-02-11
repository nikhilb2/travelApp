import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { fetchRequest, requestUploadImage } from '../../utils/request'
import ImageSelector from '../createPackage/imageSelector'
import { withStyles } from '@material-ui/styles'
//import theme from '../../theme'
import ResultList from './resultList'

const AddNew = (props: any) => {
  const { setResults, selectedCountry, resetCountry, selectItem, classes, countriesResult } = props
//  const [ keyword, setKeyword ] = useState("")
//  const [ result, setResults ] = useState(Array())
  const [ keyword, setKeyword ] = useState("")
  const [ loader, setLoader ] = useState(false)
  const [ message, setMessage ] = useState('')
  const [ selectedImages, selectImages ] = useState(Array())
  const [ place, setPlace ] = useState("")
  const addNewPlace = async (data: any) => {
    const result: any = await requestUploadImage(data.image)
    if (!result.error) {
      data.image = result.data.images[0]
      const addPlace = await fetchRequest('insert_place.php', {
        method: 'POST',
        body: JSON.stringify(data)
      }, true)

      if (addPlace.message === 'success') {
        setLoader(false)
        selectImages(Array())
        resetCountry()
        setMessage(addPlace.message)
      } else if (addPlace.error) {
        setLoader(false)
        setMessage(addPlace.error)
      }
      console.log(addPlace);
      console.log(loader);
    }
  }


  const getCountries = async (k: string) => {

    const resultCountries = await fetchRequest(`get_country.php?keyword=${k}`, {
      method: 'GET',
    //  body: JSON.stringify(data)
    }, true)
    if (!resultCountries.error) {
      setResults(resultCountries.results)
    }
  }

  return(
    <Box>
      <TextField
        id="outlined-email-input"
        label="Enter country"
        type="text"
        name="text"
        autoComplete="off"
        value={selectedCountry.country || keyword}
        margin="normal"
        variant="outlined"
        onFocus={() => resetCountry()}
        onChange={ (e: any) => {
        //  console.log(e.target.value)
        getCountries(e.target.value)
        setKeyword(e.target.value)

        }}
      />
      <div className={classes.countryResult}>
        <ResultList selectItem={selectItem} data={countriesResult} />
      </div>
      {selectedCountry.country && <TextField
        id="outlined-email-input"
        label="Enter place name"
        type="text"
        name="text"
        autoComplete="off"
        value={place}
        margin="normal"
        variant="outlined"
        onChange={ (e: any) => {
        //  console.log(e.target.value)
          setPlace(e.target.value)
        }}
      />}

      {selectedCountry.country && place &&

      <ImageSelector selectImages={selectImages} selectedImages={selectedImages} />}
      {selectedCountry.country && place && selectedImages.length > 0 &&
      <Button onClick={() => addNewPlace({
        image: selectedImages,
        country: selectedCountry.id,
        place: place

      })}>Add New Place</Button>}
      {loader ? <Typography>Loading...</Typography> : <Typography>{message}</Typography>}
    </Box>
  )
}

export default withStyles({
  countryResult: {
    position: 'fixed',
  }
})(AddNew)
