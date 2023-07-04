import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Box } from '@mui/material'
import styles from '../../styles'
import ShowMore from '../Common/ShowMore'
import Markdown from '../Common/Markdown'
import { Locales } from '../../types'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import useSurvey from '../../hooks/useSurvey'

const HelloBanner = () => {
  const { i18n } = useTranslation()
  const location = useLocation()
  const { survey, isLoading: surveyIsLoading } = useSurvey()
  const { user, isLoading: userIsLoading } = useLoggedInUser()
  const { language } = i18n

  const { cardStyles } = styles

  if (!survey || (surveyIsLoading && userIsLoading)) return null

  return (
    <Box id="hello-component" sx={cardStyles.helloBox}>
      <Box sx={cardStyles.expendableBox}>
        <Markdown>{survey.title[language as keyof Locales]}</Markdown>
        <ShowMore
          text={survey.text[language as keyof Locales]}
          expanded={location.pathname === '/public' || user?.newUser}
        />
      </Box>
    </Box>
  )
}

export default HelloBanner
