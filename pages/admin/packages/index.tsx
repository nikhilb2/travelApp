import React from 'react';
import AddPackage from '../../../src/pageContainers/addPackage';
import { userDetails } from '../../../hocs/auth-hoc'


const Edit = (props: any) => {
  return(
    <div>
      <AddPackage {...props}/>
    </div>
  )
}

Edit.getInitialProps = async () => {
  return {test: 'test'}
}


export default userDetails(Edit)
