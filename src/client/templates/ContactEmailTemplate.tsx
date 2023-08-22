import React from 'react'
import { useTranslation } from 'react-i18next'

import { User } from '@backend/types'

interface ContactEmailProps {
  user: User
  content: string
}

const ContactEmailTemplate = ({ user, content }: ContactEmailProps) => {
  const { t } = useTranslation()
  return (
    <div>
      <h3>
        <strong>Curre Contact Ticket</strong>
      </h3>

      <br />

      <p>
        <strong>{t('contact:contactTicketSenderEmail')} </strong>
        {user?.email}
      </p>
      <p>
        <strong>{t('contact:contactTicketSenderFullname')} </strong>
        {user?.firstName} {user?.lastName}
      </p>

      <br />

      <p>**********</p>
      <p>
        <strong>{t('contact:contactTicketUserMessage')}</strong>
      </p>
      <p>{content}</p>
      <p>**********</p>

      <br />

      <p>
        <strong>{t('contact:contactTicketUserSummary')}</strong>
      </p>
    </div>
  )
}

export default ContactEmailTemplate
