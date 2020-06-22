import { useState } from 'react'
import * as Fields from "./FormFields";
import { useForm, FormContext } from "react-hook-form";


export default function Form({ id,fields }) {
  if (!fields) return null;
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);
  const { handleSubmit, ...methods } = useForm();
  const onSubmit = async (values) => {
    try {
      const response = await fetch("/api/submit", {
        method: "POST",
        body: JSON.stringify({ id, ...values }),
      });

      if (!response.ok)
        throw new Error(`Something went wrong submitting the form.`);

      setSuccess(true);
    } catch (err) {
      setError(err.message);
    }
  };
  if (success) return <p>Form submitted. We'll be in touch!</p>;

  return (
    <FormContext {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {fields.map(({ __typename, ...field }, index) => {
          const Field = Fields[__typename];

          if (!Field) return null;

          return <Field key={index} {...field} />;
        })}

        <button type="submit">Submit</button>
        {error && <span>{error}</span>}
      </form>
    </FormContext>
  );
}
