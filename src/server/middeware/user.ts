import { inStaging } from '../../config'

const userMiddleware = (req, _, next) => {
  /* const {
    uid: username,
    givenname: firstName,
    sn: secondName,
    mail,
    preferredlanguage: language,
    hypersonsisuid: sisuId,
  } = req.headers */

  // For testing
  if (inStaging) {
    const { headers } = req
    console.log(headers)
    console.log(JSON.stringify(headers, null, 2))
  }

  return next()
}

export default userMiddleware
