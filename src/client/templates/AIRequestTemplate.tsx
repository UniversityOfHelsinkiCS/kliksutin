import React from 'react'
import { useTranslation } from 'react-i18next'

import { Locales, User } from '@backend/types'

import useFaculties from '../hooks/useFaculties'
import { extraOrganisations } from '../util/organisations'

interface AIRequestEmailProps {
  user: User
  facultyCode: string
  courseSize: string
  content: string
}

const AIRequestEmailTemplate = ({
  user,
  facultyCode,
  courseSize,
  content,
}: AIRequestEmailProps) => {
  const { t, i18n } = useTranslation()
  const { language } = i18n

  const { faculties, isLoading } = useFaculties()

  if (!faculties || isLoading) return null

  const organisations = faculties.concat(extraOrganisations)

  const faculty = organisations.find((f) => f.code === facultyCode)

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
        {faculty?.name[language as keyof Locales]}
      </p>
      <p>
        <strong>{t('AIrequest:courseSize')} </strong>
        {courseSize}
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
