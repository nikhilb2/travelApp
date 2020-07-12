import React from 'react'
import EditPackage from '../../../../src/pageContainers/editPackage'
import { userDetails } from '../../../../hocs/auth-hoc'
import fetch from 'isomorphic-unfetch'
import { decoratedUrl } from '../../../../src/utils/request'

const Edit = (props: any) => {
  return (
    <div>
      <EditPackage {...props} />
    </div>
  )
}

Edit.getInitialProps = async ({ req, query }: any) => {
  console.log(req)

  const packageFetch = query.id
    ? await fetch(
        decoratedUrl(
          query.id ? `get_package_by_id.php?packageid=${query.id}` : 'products'
        )
      )
    : null

  const pack = packageFetch ? await packageFetch.json() : null
  return { pack: pack ? pack.data : null }
}

export default userDetails(Edit)
