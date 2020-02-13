import React, { useState, useEffect } from 'react'
import { fetchRequest } from '../../utils/request'
import TravelCards from '../travelCard/travelCardsContainer'
import { withStyles } from '@material-ui/styles'
import PackageContainer from './editPackage/packageContainer'
const EditPackage = (props: any) => {
  const { pack, classes } = props
  const [ packages, setPackages ] = useState(Array())
  console.log(props);

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
    <div className={classes.packageContainer}>
      {pack ? <PackageContainer pack={pack} />
        : <TravelCards data={packages} edit={true}/>
      }
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
