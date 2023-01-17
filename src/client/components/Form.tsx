import React from 'react'
import { TextField, Button } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import FormRadioGroup from './FormRadioGroup'

const Form = () => {
  const { handleSubmit, control } = useForm({
    mode: 'onBlur',
  })
  const onSubmit = (data) => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="testField"
        control={control}
        defaultValue=""
        render={({ field }) => <TextField {...field} label="Text Value" />}
      />
      <FormRadioGroup control={control} />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </form>
  )
}

export default Form
