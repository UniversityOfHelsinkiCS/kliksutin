import apiClient from './apiClient'

const sendEmail = async (
  targets: (string | undefined)[],
  text: string,
  subject: string,
  replyTo = 'no-reply@helsinki.fi'
) => {
  if (!targets || targets.length === 0) throw Error('Could not send emails')

  apiClient.post('/summary', {
    targets,
    text,
    subject,
    replyTo,
  })
}

export default sendEmail
