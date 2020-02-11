import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField'
import Box from '@material-ui/core/Box'
import { fetchRequest } from '../../utils/request'

const AddNew = (props: any) => {
  const { setResults } = props
//  const [ keyword, setKeyword ] = useState("")
//  const [ result, setResults ] = useState(Array())
  const [ keyword, setKeyword ] = useState("")
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
        value={keyword}
        margin="normal"
        variant="outlined"
        onChange={ (e: any) => {
        //  console.log(e.target.value)
        getCountries(e.target.value)
        setKeyword(e.target.value)

        }}
      />
    </Box>
  )
}

export default AddNew
