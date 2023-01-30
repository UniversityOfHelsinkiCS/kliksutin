import React from 'react'
import { Button, Grid } from '@mui/material'
import { useForm } from 'react-hook-form'

import Recommendations from '../Form/Recommendations'
import RenderSurveyQuestions from './RenderSurveyQuestions'

const InteractiveForm = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  })
  const onSubmit = (data: any) => {
    const submittedData = data
    // eslint-disable-next-line
    console.log(submittedData)
  }

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={8}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <RenderSurveyQuestions control={control} />
          <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
        </form>
      </Grid>
      <Grid item xs={4}>
        <Recommendations />
      </Grid>
    </Grid>
  )
}

export default InteractiveForm
