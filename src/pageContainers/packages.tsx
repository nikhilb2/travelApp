import React, { useState, useEffect } from 'react'
import NavLogin from '../components/navigation/navLogin'
import NavBar from '../components/navigation/navBar'
import MiniNav from '../components/navigation/miniNavBar'
import TravelCards from '../components/travelCard/travelCardsContainer'
import Footer from '../components/common/footer'
import { withStyles } from '@material-ui/styles'
import theme from '../theme'
import { fetchRequest } from '../utils/request'
import Button from '@material-ui/core/Button'

const HomePage = (props: any) => {
  const { classes, user, packages, hasMore, totalResults } = props
  const [ newPackages, setNewPackages ] = useState(Array())
  const [ skip, setSkip ] = useState(12)

  const [ newHasMore, setHasMore] = useState(null)

  const getPackages = async () => {
    const result = await fetchRequest(
      `get_packages.php?skip=${skip}&limit=12`,
      {
        method: 'GET',
        //  body: JSON.stringify(data)
      },
      true
    )
    if (!result.error) {
      setNewPackages([...newPackages,...result.data])
      setHasMore(result.hasMore)
      setSkip(skip + 12)
    }
  }

  useEffect(() => {
    setNewPackages(packages)
    setHasMore(hasMore)
  }, [packages])
  return (
    <div>
      <NavLogin user={user} />
      <NavBar />
      <MiniNav />
      <div className={classes.travelCard}>

  <TravelCards data={newPackages} totalResults={totalResults} hasMore={newHasMore} getMore={getPackages}/>
  <div className={classes.seeAll}>
    <a className={classes.anchor}>
    {newHasMore

      ?    <Button variant="contained" color="primary" onClick={getPackages} >
            Load more
          </Button>

        : null }

    </a>
  </div>
      </div>
      <Footer />
    </div>
  )
}

export default withStyles({
  travelCard: {
    marginTop: theme.spacing(1),
    padding: '1rem',
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  seeAll: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
})(HomePage)
