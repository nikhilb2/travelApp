import React, { useState } from 'react'
import { withStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField'
import { fetchRequest } from '../../utils/request'
import ResultList from './resultList'

const SelectPlace = () => {
  const [ keyword, setKeyword ] = useState("")
  const [ result, setResults ] = useState(Array())
  const getPlaces = async (k: string) => {

    const resultPlaces = await fetchRequest(`get_places.php?keyword=${k}`, {
      method: 'GET',
    //  body: JSON.stringify(data)
    }, true)
    if (!resultPlaces.error) {
      setResults(resultPlaces.data)
    }
    console.log(result);

  }

  return(
    <div>
      <TextField
        id="outlined-email-input"
        label="Enter Place"
        type="text"
        name="text"
        //autoComplete="email"
        value={keyword}
        margin="normal"
        variant="outlined"
        onChange={ (e: any) => {
        //  console.log(e.target.value)
        setKeyword(e.target.value)
        getPlaces(e.target.value)

        }}
      />
      {result.length > 0 && <ResultList />}
    </div>
  )
}

export default withStyles({

})(SelectPlace)
