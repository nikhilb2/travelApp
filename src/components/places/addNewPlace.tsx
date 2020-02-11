import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import { fetchRequest } from '../../utils/request'

const AddNew = () => {
//  const [ keyword, setKeyword ] = useState("")
  const [ result, setResults ] = useState(Array())
  const [ keyword, setKeyword ] = useState("")
  const getCountries = async (k: string) => {

    const resultCountries = await fetchRequest(`get_country.php?keyword=${k}`, {
      method: 'GET',
    //  body: JSON.stringify(data)
    }, true)
    if (!resultCountries.error) {
      setResults(resultCountries.results)
    }
    console.log(resultCountries);
    console.log(result);


  }

  return(
      <TextField
        id="outlined-email-input"
        label="Enter country"
        type="text"
        name="text"
        //autoComplete="email"
        value={keyword}
        margin="normal"
        variant="outlined"
        onChange={ (e: any) => {
        //  console.log(e.target.value)
        getCountries(e.target.value)
        setKeyword(e.target.value)

        }}
      />
  )
}

export default AddNew
