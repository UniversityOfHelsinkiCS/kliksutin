import React from 'react'
import { useTranslation } from 'react-i18next'

import { User } from '@backend/types'

interface AIRequestEmailProps {
  user: User | undefined
  faculty: string | undefined
  content: string | undefined
}

const AIRequestEmailTemplate = ({
  user,
  faculty,
  content,
}: AIRequestEmailProps) => {
  const { t } = useTranslation()

  return (
    <div>
      <h3>
        <strong>Curre Chat Request</strong>
      </h3>

      <br />

      <p>
        <strong>{t('AIrequest:senderEmail')} </strong>
        {user?.email}
      </p>
      <p>
        <strong>{t('AIrequest:senderFullname')} </strong>
        {user?.firstName} {user?.lastName}
      </p>
      <p>
        <strong>{t('AIrequest:senderFaculty')} </strong>
        {faculty}
      </p>

      <br />

      <p>**********</p>
      <p>
        <strong>{t('AIrequest:userMessage')}</strong>
      </p>
      <p>{content}</p>
      <p>**********</p>
    </div>
  )
}

export default AIRequestEmailTemplate
