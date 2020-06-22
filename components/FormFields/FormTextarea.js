import { useFormContext } from "react-hook-form";

export default function FormTextarea({ textareaLabel, ...rest }) {
  const { register } = useFormContext();
  const { name } = rest;

  return (
    <div>
      <label>{textareaLabel || name}</label>
      <textarea
        ref={register({ required: rest.required })}
        htmlFor={name}
        id={name}
        {...rest}
      />
    </div>
  );
}
