import { useFormContext } from "react-hook-form";

export default function FormCheckbox({ checkboxLabel, ...rest }) {
  const { register } = useFormContext();
  const { checkboxname } = rest;

  return (
    <div>
      <label htmlFor={checkboxname}>
        <input
          ref={register({ required: rest.required })}
          id={checkboxname}
          type="checkbox"
          name={checkboxname}
          {...rest}
        />
        {checkboxLabel || checkboxname}
      </label>
    </div>
  );
}
