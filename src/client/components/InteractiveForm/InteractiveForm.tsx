import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'
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

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const mutation = useSaveEntryMutation(survey?.id)

  const [resultData, setResultData] = useState<FormValues>(null)

  const savedData = sessionStorage.getItem(FORM_DATA_KEY)

  const getSavedInstance = useCallback(() => {
    if (savedData) return JSON.parse(savedData)

    return {}
  }, [])

  const { handleSubmit, control, watch, getValues } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
    defaultValues: getSavedInstance(),
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
    mutation.mutateAsync(submittedData)
  }

  usePersistForm({ value: getValues(), sessionStorageKey: FORM_DATA_KEY })

  if (isLoading) return null

  return (
    <Box my="2rem" maxWidth={1280}>
      <Grid container>
        <Grid item sm={12}>
          <HelloBanner />
        </Grid>
        <Grid item sm={12} md={7} xl={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RenderSurvey
              control={control}
              watch={watch}
              handleSubmit={handleSubmit(onSubmit)}
            />
          </form>
        </Grid>

        <Grid item sm={12} md={5} xl={6}>
          <Recommendations watch={watch} />
        </Grid>

        {resultData && (
          <Grid item sm={12}>
            <Results formResultData={resultData} />
            <Openai watch={watch} />
            {resultData && <ProceedToContact />}
          </Grid>
        )}
      </Grid>
    </Box>
  )
}

export default InteractiveForm
