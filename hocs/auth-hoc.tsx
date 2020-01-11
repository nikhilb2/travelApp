import React from 'react'
import { getUserDetails, getServerUser } from '../src/utils/auth'
import cookies from 'next-cookies'
//import fetch from 'isomorphic-unfetch'
//import { decoratedUrl } from '../src/utils/request'
//high order component for wrapping page to get user props
export const userDetails = (Page: any) => {
  const userDetails = (props: any) => <Page {...props} />
  userDetails.getInitialProps = async (context: any) => {
    const req = context.req
    const isServer = !!req

    const user = isServer
      ? getServerUser(cookies(context))
      : { user: getUserDetails() }

    const initProps = Page.getInitialProps
      ? await Page.getInitialProps(context)
      : {}

    initProps.user = user
    return {
      ...initProps
    }
  }

  return userDetails
}
