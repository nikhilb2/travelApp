import React from 'react';
import PackagePage from '../src/pageContainers/packagePage';
import { userDetails } from '../hocs/auth-hoc'


const Package = (props: any) => {
  return(
    <div>
      <PackagePage {...props}/>
    </div>
  )
}

Package.getInitialProps = async () => {
  return {test: 'test'}
}


export default userDetails(Package)
