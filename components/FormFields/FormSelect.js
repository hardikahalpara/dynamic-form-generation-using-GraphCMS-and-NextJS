export default function FormSelect({ selectLabel, choices, ...rest }) {
  const { name } = rest;

  if (!choices) return null;

  return (
    <div>
      <label htmlFor={name}>{selectLabel || name}</label>
      <select id={name} {...rest}>
        {choices.map(({ option, ...opt }, index) => (
          <option key={index} {...opt}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
