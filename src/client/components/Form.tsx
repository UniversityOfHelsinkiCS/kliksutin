import { SubmitHandler, useForm } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit, control, formState:{ errors } } = useForm({
    mode: "onBlur"
  });
  const onSubmit: SubmitHandler<any> = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>Test Input</label>
      <input {...register("testInput")} />
      <label>Test Selection</label>
      <select {...register("tesSelect")} >
        <option value="testi1">female</option>
        <option value="testi2">male</option>
        <option value="testi3">other</option>
      </select>
      <input type="submit" />
    </form>
  )
}

export default Form