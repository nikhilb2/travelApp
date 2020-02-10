import React, { useState } from 'react'

const AddNew = () => {
//  const [ keyword, setKeyword ] = useState("")
  const [ result, setResults ] = useState(Array())
  const getCountries = async (k: string) => {

    const resultCountries = await fetchRequest(`get_country.php?keyword=${k}`, {
      method: 'GET',
    //  body: JSON.stringify(data)
    }, true)
    if (!resultCountries.error) {
      setResults(resultCountries.data)
    }
    console.log(result);

  }

  return(
    <div>
    </div>
  )
}

export default AddNew
