import * as Fields from "./FormFields";

export default function Form({ fields }) {
  if (!fields) return null;

  return (
    <form>
      {fields.map(({ __typename, ...field }, index) => {
        const Field = Fields[__typename];

        if (!Field) return null;

        return <Field key={index} {...field} />;
      })}

      <button type="submit">Submit</button>
    </form>
  );
}
