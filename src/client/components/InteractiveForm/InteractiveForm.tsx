import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'

import Results from '../ResultPage/Results'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import { FormValues } from '../../types'

const InteractiveForm = () => {
  const survey = useSurvey()

  const [resultData, setResultData] = useState<FormValues>(null)

  const { handleSubmit, control, watch } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
  }

  if (!survey) return null

  return (
    <Box my="2rem" flexGrow={1}>
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
        </Grid>
      </Grid>
    </Box>
  )
}

export default InteractiveForm
