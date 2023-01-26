import {  useState } from 'react';
import { useEffect } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';
import Contacts from './Contacts/Contacts';

const BaseContact = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
  },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App = () => {
  const [contacts, setContact] = useState(JSON.parse(localStorage.getItem('contacts')) ?? BaseContact);

  const checkList = e => {
    const name = e.target.name.value;

    let inListContact;
    contacts.forEach(el => {
      if (el.name === name) {
        inListContact = true;
      }
    });

    return inListContact;
  };
  const handleDeleteContact = id => {
    setContact(() => {
      const newContactsList = contacts.filter(contact => {
        return contact.id !== id;
      });

      return  newContactsList ;
    });
  };
  const handleCreateContact = e => {
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (checkList(e)) {
      alert(`${name} is already in contact`);
    } else {
      setContact(prev => [
        ...prev,
        {
          id: nanoid(),
          name: name,
          number: number,
        },
      ]);
    }
  };
    useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);


  return (
    <>
      <PhoneBook onCreateContact={handleCreateContact} />
      <Contacts onDeleteContact={handleDeleteContact} contacts={contacts} />
    </>
  );
};

