import { inDevelopment, inStaging } from '../../config'

const parseIamGroups = (iamGroups: string) =>
  iamGroups?.split(';').filter(Boolean) ?? []

// Add dojo iam group here
const checkAdmin = (iamGroups: string[]) => iamGroups.includes('grp-toska')

const mockHeaders = {
  uid: 'testuser',
  givenname: 'Testi',
  sn: 'Kayttaja',
  mail: 'grp-toska@helsinki.fi',
  preferredlanguage: 'fi',
  hypersonsisuid: 'hy-hlo-123',
  hygroupcn: 'grp-toska;hy-mltdk-employees',
}

const userMiddleware = (req: any, _res: any, next: any) => {
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
    isAdmin: checkAdmin(iamGroups),
  }

  // Test Shibboleth users don't have hypersonsisuid
  if (inStaging) user.id = user.username

  req.user = user

  return next()
}

export default userMiddleware
