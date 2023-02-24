import { inDevelopment } from '../../config'

const parseIamGroups = (iamGroups: string) =>
  iamGroups?.split(';').filter(Boolean) ?? []

const mockHeaders = {
  uid: 'testuser',
  givenname: 'Testi',
  sn: 'Kayttaja',
  mail: 'grp-toska@helsinki.fi',
  preferredlanguage: 'fi',
  hypersonsisuid: 'hy-hlo-123',
  hygroupcn: 'grp-toska;hy-mltdk-employees',
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
    hygroupcn,
  } = headers

  const iamGroups = parseIamGroups(hygroupcn)

  const user = {
    id,
    username,
    firstName,
    lastName,
    email,
    language,
    iamGroups,
  }

  req.user = user

  return next()
}

export default userMiddleware
