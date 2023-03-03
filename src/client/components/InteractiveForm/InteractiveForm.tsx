import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Box, Grid } from '@mui/material'

import useSurvey from '../../hooks/useSurvey'
import useSaveEntryMutation from '../../hooks/useSaveEntryMutation'
import Results from '../ResultPage/Results'
import RenderSurvey from './RenderSurvey'
import Recommendations from '../Recommendations/Recommendations'
import { FormValues } from '../../types'
import ProceedToContact from '../ResultPage/ProceedToContact'
import CourseCompletion from '../ResultPage/Openai/CourseCompletion'
import DimensionCompletion from '../ResultPage/Openai/DimensionCompletion'

const InteractiveForm = () => {
  const { survey, isLoading } = useSurvey()
  const mutation = useSaveEntryMutation(survey?.id)

  const [resultData, setResultData] = useState<FormValues>(null)

  const { handleSubmit, control, watch } = useForm({
    mode: 'onBlur',
    shouldUnregister: true,
  })

  const onSubmit = (data: FormValues) => {
    const submittedData = data

    setResultData(submittedData)
    mutation.mutateAsync(submittedData)
  }

  if (isLoading) return null

  return (
    <Box my="2rem" maxWidth={1280}>
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
          {resultData && (
            <>
              <CourseCompletion />
              <DimensionCompletion watch={watch} />
              <ProceedToContact />
            </>
          )}
        </Grid>
      </Grid>
    </Box>
  )
}

export default InteractiveForm
