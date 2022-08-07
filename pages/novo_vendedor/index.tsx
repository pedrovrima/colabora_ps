import { useForm } from "react-hook-form";
import { Seller } from '@prisma/client'

type FormData = Seller

export default function NewSeller() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit(data => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <label>Nome</label>
      <input {...register("name")} />
      <label>Código</label>
      <input {...register("code")} />
      <label>Email</label>
      <input {...register("email")} />
      <label>Expondo</label>
      <input type="checkbox" {...register("exposing")} />
      <button>Enviar</button>
    </form>
  );}
