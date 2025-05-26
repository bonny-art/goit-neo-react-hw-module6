import Contact from "../Contact/Contact";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <List>
      {contacts.map((contact) => (
        <ListItem key={contact.id}>
          <Contact data={contact} deleteContact={deleteContact} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
