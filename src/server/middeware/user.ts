import { User } from '../db/models'

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

  if (id && username) {
    User.upsert({
      ...user,
      lastLoggedIn: new Date(),
    })
  }

  req.user = user

  return next()
}

export default userMiddleware
