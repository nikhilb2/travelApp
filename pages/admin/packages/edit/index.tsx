import React from 'react';
import EditPackage from '../../../../src/pageContainers/editPackage';
import { userDetails } from '../../../../hocs/auth-hoc'


const Edit = (props: any) => {
  return(
    <div>
      <EditPackage {...props}/>
    </div>
  )
}

Edit.getInitialProps = async () => {
  return {test: 'test'}
}


export default userDetails(Edit)
