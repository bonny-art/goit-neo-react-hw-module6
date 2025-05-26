export const getFilteredContacts = (contacts, query) => {
  const normalizedQuery = query.toLowerCase().trim();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedQuery)
  );
};
