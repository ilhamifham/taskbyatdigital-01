import { Field, ErrorMessage } from "formik";

type InputProps = { label: string; type?: string; placeholder?: string; component?: string; className?: string };

export default function InputField({ label, type, placeholder, component, className }: InputProps) {
  const labelText = label.replace(" ", "").toLowerCase();

  return (
    <div className="mb-5">
      <label htmlFor={labelText} className="form-label">
        {label}
      </label>
      <Field id={labelText} type={type} name={labelText} component={component} className={`form-input ${className}`} placeholder={placeholder} />
      <ErrorMessage name={labelText} component="div" className="error-message" />
    </div>
  );
}
