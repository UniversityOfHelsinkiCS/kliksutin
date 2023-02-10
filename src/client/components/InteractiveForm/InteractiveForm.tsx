import React from 'react'
import { useForm } from 'react-hook-form'
import { Grid } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'

import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'

const InteractiveForm = () => {
  const survey = useSurvey()
  const { handleSubmit, control, watch } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  })
  const onSubmit = (data: any) => {
    const submittedData = data
    console.log(submittedData)
  }

  if (!survey) return null

  return (
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
    </Grid>
  )
}

export default InteractiveForm
