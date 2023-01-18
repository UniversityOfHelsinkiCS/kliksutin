import React from 'react'
import { Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'

import CourseSize from './CourseSize'
import CourseType from './CourseType'

const Form = () => {
  const { handleSubmit, control, watch } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data: any) => console.log(data)

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CourseSize control={control} watch={watch} />
        <CourseType control={control} watch={watch} />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </form>
    </Container>
  )
}

export default Form
