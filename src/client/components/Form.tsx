import { TextField, Button } from "@mui/material";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, control, formState:{ errors } } = useForm({
    mode: "onBlur"
  });
  const onSubmit: SubmitHandler<any> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="testField"
        control={control}
				defaultValue=""
        render={({ field }) => (
          <TextField {...field} label={"Text Value"} />
        )}
      />
      <Button onClick={handleSubmit(onSubmit)}>Submit</Button>
    </form>
  )
}

export default Form