import { useFormContext } from "react-hook-form";

export default function FormSelect({ selectLabel, choices, ...rest }) {
  if (!choices) return null;

  const { register } = useFormContext();
  const { name } = rest;

  return (
    <div>
      <label htmlFor={name}>{selectLabel || name}</label>
      <select ref={register({ required: rest.required })} id={name} {...rest}>
        {choices.map(({ option, ...opt }, index) => (
          <option key={index} {...opt}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

