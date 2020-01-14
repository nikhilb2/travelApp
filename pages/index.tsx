import React from 'react';
import HomePage from '../src/pageContainers/homePage';
import { userDetails } from '../hocs/auth-hoc'

const Index = (props: any) => {
  return(
    <div>
      <HomePage {...props}/>
    </div>
  )
}

Index.getInitialProps = async () => {
  return {test: 'test'}
}


export default userDetails(Index)
