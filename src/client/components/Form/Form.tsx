import React from 'react'
import { Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'

import CourseSize from './CourseSize'
import CourseType from './CourseType'
import CourseAttendance from './CourseAttendance'
import CourseRecord from './CourseRecord'
import CourseMethods from './CourseMethods'

const Form = () => {
  const { handleSubmit, control, watch } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data: any) => {
    const submittedData = data

    // Hacky way to assert that isMooc is false if the course size is small
    if (submittedData.courseAttendants === 'smallSize')
      submittedData.isMooc = 'false'
    console.log(submittedData)
  }
  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CourseSize control={control} watch={watch} />
        <CourseType control={control} watch={watch} />
        <CourseAttendance control={control} watch={watch} />
        <CourseRecord control={control} watch={watch} />
        <CourseMethods control={control} watch={watch} />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </form>
    </Container>
  )
}

export default Form
