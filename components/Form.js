import * as Fields from "./FormFields";
import { useForm, FormContext } from "react-hook-form";


export default function Form({ fields }) {
  if (!fields) return null;
  const { handleSubmit, ...methods } = useForm();

  const onSubmit = (values) => console.log(values);
  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ __typename, ...field }, index) => {
          const Field = Fields[__typename];

          if (!Field) return null;

          return <Field key={index} {...field} />;
        })}

        <button type="submit">Submit</button>
      </form>
    </FormContext>
  );
}
