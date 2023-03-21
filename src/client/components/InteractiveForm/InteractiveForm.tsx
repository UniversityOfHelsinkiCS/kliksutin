import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import { Box, Grid } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'
import usePersistForm from '../../hooks/usePersistForm'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'
import HelloBanner from './HelloBanner'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import Results from '../ResultPage/Results'
import Openai from '../ResultPage/Openai/Openai'
import ProceedToContact from '../ResultPage/ProceedToContact'
import { FormValues } from '../../types'
import { FORM_DATA_KEY } from '../../../config'
import styles from '../../styles'

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const mutation = useSaveEntryMutation(survey?.id)
  const navigate = useNavigate()
  const [resultData, setResultData] = useState<FormValues>(null)

  const { formStyles } = styles

  const getSavedInstance = useCallback(() => {
    const savedData = sessionStorage.getItem(FORM_DATA_KEY)
    if (savedData) return JSON.parse(savedData)

    return {}
  }, [])

  const {
    formState: { isSubmitted },
    handleSubmit,
    control,
    watch,
    getValues,
  } = useForm({
    mode: 'onBlur',
    shouldUnregister: false,
    defaultValues: getSavedInstance(),
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
    mutation.mutateAsync(submittedData)

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    }) // Scroll to top
    navigate('/results')
  }

  usePersistForm({ value: getValues(), sessionStorageKey: FORM_DATA_KEY })

  if (isLoading) return null

  return (
    <Box sx={formStyles.formWrapper}>
      <Grid container>
        <Grid item sm={12}>
          <HelloBanner />
        </Grid>
        <Grid item sm={12} md={7} xl={8}>
          <Routes>
            <Route
              path=""
              element={
                <form onSubmit={handleSubmit(onSubmit)}>
                  <RenderSurvey
                    control={control}
                    watch={watch}
                    handleSubmit={handleSubmit(onSubmit)}
                    isSubmitted={isSubmitted}
                  />
                </form>
              }
            />
            <Route
              path="results"
              element={
                resultData ? (
                  <Results formResultData={resultData} />
                ) : (
                  <Navigate replace to="/" />
                )
              }
            />
          </Routes>
        </Grid>
        <Grid item sm={12} md={5} xl={4}>
          <Recommendations watch={watch} />
        </Grid>
        {resultData && (
          <Grid item sm={12}>
            <Openai watch={watch} />
            <ProceedToContact />
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default InteractiveForm
