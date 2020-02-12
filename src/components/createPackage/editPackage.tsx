import React, { useState, useEffect } from 'react'
import { fetchRequest } from '../../utils/request'
import TravelCards from '../travelCard/travelCardsContainer'
import { withStyles } from '@material-ui/styles'

const EditPackage = () => {
  const [ packages, setPackages ] = useState(Array())
  const getPackages = async () => {
    const result = await fetchRequest(`get_packages.php`, {
      method: 'GET',
    //  body: JSON.stringify(data)
    }, true)
    if (!result.error) {
      setPackages(result.data)
    }
    console.log(result);
    console.log(packages);

  }
  useEffect(() => {
    getPackages()
  }, [0])
  return(
    <div>
      <TravelCards data={packages} />
    </div>
  )
}

export default withStyles({
  packageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center'
  }
})(EditPackage)
