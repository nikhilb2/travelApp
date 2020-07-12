import React from 'react'
import PackagePage from '../src/pageContainers/packagePage'
import { userDetails } from '../hocs/auth-hoc'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../src/utils/request'

const Package = (props: any) => {
  return (
    <div>
      <PackagePage {...props} />
    </div>
  )
}

Package.getInitialProps = async ({ req, query }: any) => {
  console.log(req)

  const packageFetch = await fetch(
    decoratedUrl(
      query.id ? `get_package_by_id.php?packageid=${query.id}` : 'products'
    )
  )

  const pack = await packageFetch.json()
  return { pack: pack.data }
}

export default userDetails(Package)
