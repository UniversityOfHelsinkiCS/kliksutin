import React from 'react'
import { Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import FormOptionBox from './FormOptionBox'

const questions = [
  {
    id: 1,
    heading: 'First question',
    text: 'This is the first question',
    options: [
      {
        label: 'Radio Option 1',
        value: 'Option 1',
      },
      {
        label: 'Radio Option 2',
        value: 'Option 2',
      },
    ],
  },
  {
    id: 2,
    heading: 'Second question',
    text: 'This is the second question',
    options: [
      {
        label: 'Radio Option 1',
        value: 'Option 1',
      },
      {
        label: 'Radio Option 2',
        value: 'Option 2',
      },
      {
        label: 'Radio Option 3',
        value: 'Option 3',
      },
    ],
  },
  {
    id: 3,
    heading: 'Third and the last question',
    text: 'This is the third question',
    options: [
      {
        label: 'Radio Option 1',
        value: 'Option 1',
      },
      {
        label: 'Radio Option 2',
        value: 'Option 2',
      },
    ],
  },
]

const Form = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data: any) => console.log(data)

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
