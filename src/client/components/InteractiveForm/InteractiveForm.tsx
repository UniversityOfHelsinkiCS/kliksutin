import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { enqueueSnackbar } from 'notistack'
import { Box, Grid } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import usePersistForm from '../../hooks/usePersistForm'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'

import HelloBanner from './HelloBanner'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import Results from '../ResultPage/Results'

import { useResultData } from '../../contexts/ResultDataContext'

import styles from '../../styles'
import { FormValues } from '../../types'
import { FORM_DATA_KEY } from '../../../config'

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const { t } = useTranslation()
  const mutation = useSaveEntryMutation(survey?.id)

  const sessionLocation = sessionStorage.getItem('curre-session-location')
  const [showResults, setShowResults] = useState(sessionLocation === 'results')

  const { resultData, setResultData } = useResultData()

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

    console.log(submittedData)

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

  if (isLoading) return null

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
