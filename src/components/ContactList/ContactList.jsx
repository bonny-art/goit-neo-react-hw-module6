import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";
import List from "../List/List";
import ListItem from "../ListItem/ListItem";
import { getFilteredContacts } from "../../utils/getFilteredContacts";

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts.items);
  const query = useSelector((state) => state.filters.name);

  const filteredContacts = getFilteredContacts(contacts, query);

  return (
    <List>
      {filteredContacts.map((contact) => (
        <ListItem key={contact.id}>
          <Contact data={contact} />
        </ListItem>
      ))}
    </List>
  );
};

export default ContactList;
