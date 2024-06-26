import { getAccessToken } from './auth'
const url = 'https://images.myrespawn.com/travel-api/'
const imageUrl = 'https://images.myrespawn.com/travel-api/uploads/'
export let parseJSONResponse = null

// concat url with param
export function decoratedUrl(params) {
  return url + params
}

export function decoratedImageUrl(params) {
  return imageUrl + params
}

//concat fetch options with user-key and other headers
export function decoratedOptions(params, auth) {
  console.log(params)
  const newOptions = Object.assign(params, {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  if (auth) {
    const accessToken = getAccessToken()
    newOptions.headers.authorization = 'Bearer ' + accessToken
  }

  //console.log(accessToken)
  return newOptions
}

function parseJSON(response) {
  parseJSONResponse = response
  return response.json().catch((ex) => {
    const error = new Error(ex)
    error.response = response
    error.jsonFailed = true
    throw error
  })
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response
  }
  const error = new Error(response.statusText)
  error.response = response
  error.error = true
  error.httpErrCode = response.status
  throw error
}

export const fetchRequest = async (param, options, auth) => {
  const urlTofetch = url + param
  const newOptions = decoratedOptions(options, auth)
  console.log(newOptions)
  try {
    const response = checkStatus(await fetch(urlTofetch, newOptions))
    const result = await parseJSON(response)

    return result
  } catch (error) {
    console.log(error)
    const parseRes = await error.response.json()
    const parsedError = Object.assign(error, parseRes)
    return parsedError
  }
}
export const fetchRequestWithoutResponse = async (param, options) => {
  const urlTofetch = url + param
  const newOptions = decoratedOptions(options)
  try {
    const response = checkStatus(await fetch(urlTofetch, newOptions))

    return response
  } catch (error) {
    error
  }
}

export function requestUploadImage(photos) {
  const formData = new FormData()
  photos.forEach((uri, i) => {
    const fileName = uri.name
    formData.append(`fileToUpload[${i}]`, uri)
  })
  const options = {
    method: 'POST',
    body: formData,
    header: {
      //'Content-Type': 'application/json'
      Accept: 'application/json',
      'Content-Type': 'multipart/form-data',
    },
  }
  return fetch('https://images.myrespawn.com/travel-api/upload.php', options) // eslint-disable-line
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => ({ data }))
    .catch((err) => ({ err }))
}

export function returnFormData(photos) {
  const formData = new FormData()
  console.log(photos)

  console.log(formData.values())
  return formData
}
