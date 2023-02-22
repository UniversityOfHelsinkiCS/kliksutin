import axios from 'axios'

import { PATE_URL } from '../util/config'
import { inProduction, inStaging } from '../../config'

const settings = {
  hideToska: false,
  disableToska: true,
  color: '#107eab',
  header: 'Kliksutin',
  headerFontColor: 'white',
  dryrun: !inProduction || inStaging,
}

const pateClient = axios.create({
  baseURL: PATE_URL,
  params: {
    token: process.env.API_TOKEN,
  },
})

const sendEmail = async (targets: string[], text: string) => {
  const subject = 'Kliksutin yhteenveto'

  const emails = targets.map((to) => ({ to, subject }))

  const mail = {
    template: {
      from: 'Kliksutin',
      text,
    },
    emails,
    settings,
  }

  await pateClient.post('/', mail)
}

export default sendEmail
