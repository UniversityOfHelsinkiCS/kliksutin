import apiClient from './apiClient'

const sendEmail = async (
  targets: (string | undefined)[],
  text: string,
  subject: string
) => {
  if (!targets || targets.length === 0) throw Error('Could not send emails')

  apiClient.post('/summary', {
    targets,
    text,
    subject,
  })
}

export default sendEmail
