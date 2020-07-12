import React from 'react'
import Packages from '../../src/pageContainers/packages'
import { userDetails } from '../../hocs/auth-hoc'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../../src/utils/request'
import Head from 'next/head'
const Index = (props: any) => {
  return (
    <div>
    <Head>
      <title>Book my chhutti Packages</title>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width"
      />
    </Head>
      <Packages {...props} />
    </div>
  )
}

Index.getInitialProps = async () => {
  const packagesFetch = await fetch(decoratedUrl('get_packages.php?limit=12'))
  const packages = await packagesFetch.json()
  return { packages: packages.data, hasMore: packages.hasMore, totalResults: packages.totalResults }
}

export default userDetails(Index)
