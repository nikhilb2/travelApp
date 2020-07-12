import React from 'react'
import HomePage from '../src/pageContainers/homePage'
import { userDetails } from '../hocs/auth-hoc'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../src/utils/request'
import Head from 'next/head'
const Index = (props: any) => {
  return (
    <div>
    <Head>
      <title>Book my chhutti Home page</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
      <HomePage {...props} />
    </div>
  )
}

Index.getInitialProps = async () => {
  const packagesFetch = await fetch(decoratedUrl('get_packages.php?limit=8'))
  const packages = await packagesFetch.json()
  const destinationsFetch = await fetch(decoratedUrl('get_places.php?limit=9'))
  const destinations = await destinationsFetch.json()
  return { packages: packages.data, destinations: destinations.data }
}

export default userDetails(Index)
