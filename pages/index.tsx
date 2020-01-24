import React from 'react';
import HomePage from '../src/pageContainers/homePage';
import { userDetails } from '../hocs/auth-hoc'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../src/utils/request'

const Index = (props: any) => {
  return(
    <div>
      <HomePage {...props}/>
    </div>
  )
}

Index.getInitialProps = async () => {
  const packagesFetch = await fetch(decoratedUrl('get_packages.php'))
  const packages = await packagesFetch.json()
  return {packages: packages.data}
}


export default userDetails(Index)
