import { inDevelopment } from '../../config'

const mockHeaders = {
  uid: 'testuser',
  givenname: 'Testi',
  sn: 'Kayttaja',
  mail: 'grp-toska@helsinki.fi',
  preferredlanguage: 'fi',
  hypersonsisuid: 'hy-hlo-123',
}

const userMiddleware = (req, _, next) => {
  const headers = inDevelopment ? mockHeaders : req.headers

  const {
    uid: username,
    givenname: firstName,
    sn: lastName,
    mail: email,
    preferredlanguage: language,
    hypersonsisuid: id,
  } = headers

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
