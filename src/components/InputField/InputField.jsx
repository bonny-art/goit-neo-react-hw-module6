import { useId } from "react";

import { useField } from "formik";

import styles from "./InputField.module.css";

const InputField = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const fieldId = useId();

  const inputClass = meta.touched
    ? meta.error
      ? styles.inputError
      : styles.inputValid
    : styles.input;

  return (
    <div className={styles.fieldWrapper}>
      <label htmlFor={fieldId} className={styles.label}>
        {label}
      </label>
      <input {...field} {...props} className={inputClass} id={fieldId} />
      {meta.touched && meta.error && (
        <span className={styles.error}>{meta.error}</span>
      )}
    </div>
  );
};

export default InputField;
