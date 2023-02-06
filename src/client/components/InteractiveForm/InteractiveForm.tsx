import React from 'react'
import { useForm } from 'react-hook-form'
import { Button, Grid } from '@mui/material'
import useSurvey from '../../hooks/useSurvey'

import RenderSurvey from './RenderSurvey'

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
          />
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </form>
      </Grid>
    </Grid>
  )
}

export default InteractiveForm
