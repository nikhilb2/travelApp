import React from 'react'
import ContactUs from '../src/pageContainers/contactUs'
import { userDetails } from '../hocs/auth-hoc'
const Index = (props: any) => {
  return (
    <div>
      <ContactUs {...props} />
    </div>
  )
}

export default userDetails(Index)
