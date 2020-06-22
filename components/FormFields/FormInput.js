import { useFormContext } from 'react-hook-form'
export default function FormInput({ inputLabel, type: enumType, ...rest }) {
  const { name } = rest;
  const type = enumType.toLowerCase();
  const { register } = useFormContext();
  return (
    <div>
      {inputLabel && <label htmlFor={name}>{inputLabel || name}</label>}
      <input
        ref={register({ required: rest.required })}
        id={name}
        type={type}
        {...rest}
      />
    </div>
  );
}
