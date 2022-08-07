import { useForm, useFieldArray } from "react-hook-form";
import { Sales, ProductSales } from "@prisma/client";

interface FormData extends Sales {
  productSales: ProductSales;
}

function ProductSalesField(props: any) {
  const { control, register } = props;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "productSales",
  });

  return (
    <>
    <button onClick={()=>append({sellerId:1,product:"",price:0})}>Add</button>
      {fields.map((field, index) => 
        <div key={field.id}>
          <select {...register(`productSales.${index}.sellerId`)}>
            <option value={1}>OAMa</option>
          </select>
          <input {...register(`productSales.${index}.product`)}></input>
          <input {...register(`productSales.${index}.price`)}></input>
        </div>
      )}
    </>
  );
}

export default function NewSeller() {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <form onSubmit={onSubmit}>
      <label>Data</label>
      <input {...register("date")} />
      <ProductSalesField control={control} register={register} />
      <button>Enviar</button>
    </form>
  );
}
