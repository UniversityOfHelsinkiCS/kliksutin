import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import ReactDOMServer from 'react-dom/server'
import { Box, Grid } from '@mui/material'
import { Locales, FormValues } from '@backend/types'

import useSurvey from '../../hooks/useSurvey'
import useFaculties from '../../hooks/useFaculties'
import usePersistForm from '../../hooks/usePersistForm'
import useLoggedInUser from '../../hooks/useLoggedInUser'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'

import HelloBanner from './HelloBanner'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import Results from '../ResultPage/Results'
import AIRequestEmailTemplate from '../../templates/AIRequestTemplate'

import { useResultData } from '../../contexts/ResultDataContext'

import sendEmail from '../../util/mailing'

import styles from '../../styles'
import { FORM_DATA_KEY } from '../../../config'

const InteractiveForm = () => {
  const { t, i18n } = useTranslation()
  const { faculties, isLoading: facultiesIsLoading } = useFaculties()
  const { survey, isLoading: surveyIsLoading } = useSurvey()
  const { user, isLoading: userIsLoading } = useLoggedInUser()
  const mutation = useSaveEntryMutation(survey?.id)

  const sessionLocation = sessionStorage.getItem('curre-session-location')
  const [showResults, setShowResults] = useState(sessionLocation === 'results')

  const { resultData, setResultData } = useResultData()

  const { language } = i18n

  const { formStyles } = styles

  const {
    formState: { isSubmitted },
    handleSubmit,
    control,
    watch,
  } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: resultData,
  })

  const onSubmit = (submittedData: FormValues) => {
    setResultData(submittedData)

    const { useAI, faculty } = submittedData

    if (useAI?.value && user?.email) {
      const userFaculty = faculties?.find((f) => f.code === faculty)

      const replyAddr = user.email
      const targets = [user.email, 'opetusteknologia@helsinki.fi']

      const requestEmailTemplate = ReactDOMServer.renderToString(
        <AIRequestEmailTemplate
          user={user}
          faculty={userFaculty?.name[language as keyof Locales]}
          content={useAI?.content}
        />
      )

      sendEmail(targets, requestEmailTemplate, 'Curre Chat Request', replyAddr)
        .then(() => {
          enqueueSnackbar(t('AIrequest:sendSuccess'), {
            variant: 'success',
          })
        })
        .catch(() => {
          enqueueSnackbar(t('AIrequest:pateErrorMessage'), { variant: 'error' })
        })
    }

    mutation
      .mutateAsync(submittedData)
      .then(() => {
        sessionStorage.setItem('curre-session-location', 'results')
        setShowResults(true)

        document
          ?.getElementById('curre-main-section')
          ?.scrollIntoView({ behavior: 'smooth' })
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error)
        enqueueSnackbar(t('common:submitError'), { variant: 'error' })
      })
  }

  usePersistForm({ value: watch(), sessionStorageKey: FORM_DATA_KEY })

  if (facultiesIsLoading || surveyIsLoading || userIsLoading) return null

  return (
    <Box sx={formStyles.formWrapper}>
      <Grid container>
        <Grid item sm={12}>
          <HelloBanner />
        </Grid>
        <Grid
          id='curre-main-section'
          sx={{ px: 2, maxWidth: '100vw' }}
          item
          sm={12}
          md={7}
          xl={8}
        >
          <form
            style={{ display: showResults ? 'none' : 'block' }}
            onSubmit={handleSubmit(onSubmit)}
          >
            <RenderSurvey
              control={control}
              watch={watch}
              isSubmitted={isSubmitted}
            />
          </form>

          {resultData && showResults && (
            <Results setShowResults={setShowResults} />
          )}
        </Grid>
        <Grid item sm={12} md={5} xl={4}>
          <Recommendations watch={watch} />
        </Grid>
      </Grid>
    </Box>
  )
}

export default InteractiveForm
