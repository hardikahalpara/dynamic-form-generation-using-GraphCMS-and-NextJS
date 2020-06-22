export default function FormTextarea({ textareaLabel, ...rest }) {
  const { name } = rest;

  return (
    <div>
      <label htmlFor={name}>{textareaLabel || name}</label>
      <textarea id={name} {...rest} />
    </div>
  );
}
