import { inDevelopment, inE2EMode } from '../../config'

const parseIamGroups = (iamGroups: string) =>
  iamGroups?.split(';').filter(Boolean) ?? []

const checkAdmin = (iamGroups: string[]) =>
  iamGroups.some((iamGroup) =>
    ['hy-ypa-opa-ote', 'grp-toska'].includes(iamGroup)
  )

const mockHeaders = {
  uid: 'testuser',
  givenname: 'Testi',
  sn: 'Kayttaja',
  mail: 'grp-toska@helsinki.fi',
  preferredlanguage: 'fi',
  hypersonsisuid: 'hy-hlo-1441871',
  hygroupcn: 'grp-toska;hy-mltdk-employees',
}

const userMiddleware = (req: any, _res: any, next: any) => {
  const headers = inDevelopment || inE2EMode ? mockHeaders : req.headers

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
    id: id || username, // Username if no account in Sisu
    username,
    firstName,
    lastName,
    email,
    language,
    iamGroups,
    isAdmin: checkAdmin(iamGroups) || username === 'cesa', // hardcode translator as admin
  }

  req.user = user

  return next()
}

export default userMiddleware
