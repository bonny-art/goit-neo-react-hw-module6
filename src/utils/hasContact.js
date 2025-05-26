export const hasContact = (contacts, newContact) =>
  contacts.some(
    (contact) =>
      contact.name.trim().toLowerCase() === newContact.name.trim().toLowerCase()
  );
