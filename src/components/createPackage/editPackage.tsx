import React, { useState, useEffect } from 'react'
import { fetchRequest } from '../../utils/request'
import TravelCards from '../travelCard/travelCardsContainer'
import { withStyles } from '@material-ui/styles'
import PackageContainer from './editPackage/packageContainer'
const EditPackage = (props: any) => {
  const { pack, classes } = props
  const [packages, setPackages] = useState(Array())
  const [loader, setLoader] = useState(false)
  const [alert, showAlert] = useState(false)
  const [message, setMessage] = useState(false)
  const getPackages = async () => {
    const result = await fetchRequest(
      `get_packages.php`,
      {
        method: 'GET',
        //  body: JSON.stringify(data)
      },
      true
    )
    if (!result.error) {
      setPackages(result.data)
    }
  }
  useEffect(() => {
    getPackages()
  }, [0])

  console.log(loader)
  console.log(alert)
  console.log(message)

  const deletePacakage = async (id: any) => {
    setLoader(true)
    const deleteP = await fetchRequest(
      'delete_package.php',
      {
        method: 'POST',
        body: JSON.stringify({ id }),
      },
      true
    )

    if (deleteP.message === 'success') {
      getPackages()
    } else if (deleteP.error) {
      setLoader(false)
      setMessage(deleteP.error)
      showAlert(true)
    }
  }

  return (
    <div className={classes.packageContainer}>
      {pack ? (
        <PackageContainer pack={pack} />
      ) : (
        <TravelCards
          data={packages}
          edit={true}
          deletePacakage={(id: any) => deletePacakage(id)}
        />
      )}
    </div>
  )
}

export default withStyles({
  packageContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})(EditPackage)
