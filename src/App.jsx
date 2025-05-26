import { useState } from "react";

import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import { FaAddressBook } from "react-icons/fa";

import ContactList from "./components/ContactList/ContactList";
import Container from "./components/Container/Container";
import Section from "./components/Section/Section";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactForm from "./components/ContactForm/ContactForm";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { hasContact } from "./utils/hasContact";
import { getFilteredContacts } from "./utils/getFilteredContacts";

import "./App.module.css";
import style from "./App.module.css";

const defaultContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

function App() {
  const [contacts, setContacts] = useLocalStorage("contacts", defaultContacts);
  const [query, setQuery] = useState("");

  const addContact = (data) => {
    if (hasContact(contacts, data)) {
      toast.error("This user is already in your Phonebook!");
      return false;
    }

    const newContact = {
      ...data,
      id: nanoid(),
    };

    setContacts([...contacts, newContact]);
    toast.success("Contact added!");
    return true;
  };

  const deleteContact = (id) => () => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const handleInput = (event) => {
    const rawValue = event.target.value;

    const filteredValue = rawValue
      .replace(/[^a-zA-Zа-яА-ЯґҐєЄіІїЇʼ' ]/g, "")
      .replace(/['ʼ]{2,}/g, "'")
      .replace(/\s{2,}/g, " ")
      .trim()
      .toLowerCase();

    setQuery(filteredValue);
  };

  const filteredContacts = getFilteredContacts(contacts, query);

  return (
    <>
      <Section>
        <Container>
          <div className={style.container}>
            <FaAddressBook className={style.icon} />
            <h1 className={style.title}>Phonebook</h1>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactForm addContact={addContact} />
        </Container>
      </Section>

      <Section>
        <Container>
          <SearchBox value={query} onInput={handleInput}>
            Find contacts by name
          </SearchBox>
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactList
            contacts={filteredContacts}
            deleteContact={deleteContact}
          />
        </Container>
      </Section>
    </>
  );
}

export default App;
