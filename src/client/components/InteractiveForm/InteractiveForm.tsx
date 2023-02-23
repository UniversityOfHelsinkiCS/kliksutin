import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'
import { useMutation } from 'react-query'

import useSurvey from '../../hooks/useSurvey'
import Results from '../ResultPage/Results'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import { FormValues } from '../../types'
import apiClient from '../../util/apiClient'
import ProceedSection from '../ResultPage/ProceedSection'

const saveResults = async (data: FormValues) => {
  apiClient.post('/entries/0', {
    data,
  })
}

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const mutation = useMutation(saveResults)

  const [resultData, setResultData] = useState<FormValues>(null)

  const { handleSubmit, control, watch } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
    mutation.mutate(submittedData)
  }

  if (isLoading) return null

  return (
    <Box my="2rem">
      <Grid container>
        <Grid item sm={12} md={7} xl={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <RenderSurvey
              control={control}
              watch={watch}
              questions={survey.Questions}
              handleSubmit={handleSubmit(onSubmit)}
            />
          </form>
        </Grid>
        <Grid item sm={12} md={5} xl={6}>
          <Recommendations watch={watch} />
        </Grid>
        <Grid item sm={12}>
          <Results formResultData={resultData} />
          {resultData && <ProceedSection />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default InteractiveForm
