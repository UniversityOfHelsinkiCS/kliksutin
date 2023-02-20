const userMiddleware = (req, _, next) => {
  const {
    uid: username,
    givenname: firstName,
    sn: secondName,
    mail,
    preferredlanguage: language,
    hypersonsisuid: sisuId,
  } = req.headers

  req.user = {
    username,
    firstName,
    secondName,
    mail,
    language,
    sisuId,
  }

  return next()
}

export default userMiddleware
