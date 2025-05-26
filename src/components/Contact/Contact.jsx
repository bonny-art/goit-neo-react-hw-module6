import { BsFillPersonFill } from "react-icons/bs";
import { FaPhone } from "react-icons/fa6";

import Button from "../Button/Button";

import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ data }) => {
  const dispatch = useDispatch();

  const handleDelete = (id) => () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.field}>
          <BsFillPersonFill size={24} className={styles.icon} />
          <h3 className={styles.name}>{data.name}</h3>
        </div>
        <div className={styles.field}>
          <FaPhone size={20} className={styles.icon} />
          <p className={styles.number}>{data.number}</p>
        </div>
      </div>
      <Button
        type="button"
        className={styles.button}
        style={"red"}
        onClick={handleDelete(data.id)}
      >
        Delete
      </Button>
    </div>
  );
};

export default Contact;
