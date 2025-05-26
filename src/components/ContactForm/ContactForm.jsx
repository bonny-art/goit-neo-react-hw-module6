import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Button from "../Button/Button";
import InputField from "../InputField/InputField";

import styles from "./ContactForm.module.css";
import { useDispatch, useSelector } from "react-redux";
import { hasContact } from "../../utils/hasContact";
import toast from "react-hot-toast";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsSlice";

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

const ContactForm = () => {
  const contacts = useSelector((state) => state.contacts.items);

  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    if (hasContact(contacts, values)) {
      toast.error("This user is already in your Phonebook!");
      return false;
    }

    const newContact = {
      ...values,
      id: nanoid(),
    };

    dispatch(addContact(newContact));
    toast.success("Contact added!");
    actions.resetForm();
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
