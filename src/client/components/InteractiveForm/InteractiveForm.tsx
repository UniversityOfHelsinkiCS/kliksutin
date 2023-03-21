import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'
import { Route, Routes, useNavigate } from 'react-router-dom'
import useSurvey from '../../hooks/useSurvey'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'
import Results from '../ResultPage/Results'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import { FormValues } from '../../types'
import ProceedToContact from '../ResultPage/ProceedToContact'
import Openai from '../ResultPage/Openai/Openai'
import usePersistForm from '../../hooks/usePersistForm'
import { FORM_DATA_KEY } from '../../../config'
import HelloBanner from './HelloBanner'
import styles from '../../styles'

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const mutation = useSaveEntryMutation(survey?.id)
  const navigate = useNavigate()
  const [resultData, setResultData] = useState<FormValues>(null)

  const { formStyles } = styles

  const savedData = sessionStorage.getItem(FORM_DATA_KEY)

  const getSavedInstance = useCallback(() => {
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
              element={<Results formResultData={resultData} />}
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
