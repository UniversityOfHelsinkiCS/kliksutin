import React from 'react'
import { Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import FormOptionBox from './FormOptionBox'

import getQuestionData from '../../data/devQuestionData'

const Form = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data: any) => console.log(data)

  const questions = getQuestionData()

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        {questions.map((singleQuestion) => (
          <FormOptionBox
            key={singleQuestion.id}
            control={control}
            questionData={singleQuestion}
          />
        ))}
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </form>
    </Container>
  )
}

export default Form
