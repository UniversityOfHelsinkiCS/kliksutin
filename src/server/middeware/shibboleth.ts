import headersMiddleware from 'unfuck-utf8-headers-middleware'

const headers = [
  'uid',
  'givenname',
  'sn',
  'mail',
  'preferredlanguage',
  'hypersonsisuid',
]

export default headersMiddleware(headers)
