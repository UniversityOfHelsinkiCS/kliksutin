import React from 'react'
import { Button, Container } from '@mui/material'
import { useForm } from 'react-hook-form'
import FormOptionBox from './FormOptionBox'

const options = [
  {
    label: 'Radio Option 1',
    value: 'Option 1',
  },
  {
    label: 'Radio Option 2',
    value: 'Option 2',
  },
]

const Form = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormOptionBox control={control} options={options} />
        <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
      </form>
    </Container>
  )
}

export default Form
