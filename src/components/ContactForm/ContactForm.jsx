import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import InputField from "../InputField/InputField";

import styles from "./ContactForm.module.css";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

const initialValues = {
  name: "",
  number: "",
};

const ContactForm = ({ addContact }) => {
  const handleSubmit = (values, actions) => {
    const success = addContact(values);

    if (success) {
      actions.resetForm();
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={SignupSchema}
    >
      <Form className={styles.form}>
        <div className={styles.container}>
          <InputField name="name" type="text" label="Name" />
          <InputField name="number" type="text" label="Number" />
        </div>

        <Button type="submit" style="green">
          Add contact
        </Button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
