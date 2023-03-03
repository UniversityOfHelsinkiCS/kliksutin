// @ts-ignore
import headersMiddleware from 'unfuck-utf8-headers-middleware'

const headers = [
  'uid',
  'givenname',
  'sn',
  'mail',
  'preferredlanguage',
  'hypersonsisuid',
  'hyGroupCn',
]

export default headersMiddleware(headers)
