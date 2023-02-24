const userMiddleware = (req, _, next) => {
  const {
    uid: username,
    givenname: firstName,
    sn: lastName,
    mail: email,
    preferredlanguage: language,
    hypersonsisuid: id,
  } = req.headers

  const user = {
    username,
    firstName,
    lastName,
    email,
    language,
    id,
  }

  req.user = user

  return next()
}

export default userMiddleware
