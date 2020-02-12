import React from 'react';
import AdminPage from '../../src/pageContainers/adminPage';
import { userDetails } from '../../hocs/auth-hoc'


const Admin = (props: any) => {
  return(
    <div>
      <AdminPage {...props}/>
    </div>
  )
}

Admin.getInitialProps = async () => {
  return {test: 'test'}
}


export default userDetails(Admin)
