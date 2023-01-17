import { RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { Controller } from 'react-hook-form'

const FormRadioGroup = ({ control }) => {
  return (
    <Controller
      control={control}
      name="checkbox"
      defaultValue={''}
      render={({ field }) => (
        <RadioGroup {...field}>
          <FormControlLabel
            value={'choise 1'}
            control={<Radio />}
            label={'A'}
          />
          <FormControlLabel
            value={'choise 2'}
            control={<Radio />}
            label={'B'}
          />
          <FormControlLabel
            value={'choise 3'}
            control={<Radio />}
            label={'C'}
          />
        </RadioGroup>
      )}
    />
  )
}

export default FormRadioGroup
