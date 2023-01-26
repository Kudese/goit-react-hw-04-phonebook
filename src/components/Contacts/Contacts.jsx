import s from '../Contacts/Contacts.module.css';
import ContactFiler from './ContactFilter/ContactFilter';
import ContactIteam from './ContactIteam/ContacIteam';
import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Contacts({ contacts, onDeleteContact }) {
  const [filter, setFilter] = useState('');

  const handleFiletrContacts = e => {
    const searh = e.target.value;
    setFilter(searh);
  };
  const list = contacts.filter(el =>
    el.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={s.conteiner}>
      <h2>Contacts</h2>
      <ContactFiler filter={filter} onFilterContacts={handleFiletrContacts} />
      <ul>
        {list.map(el => {
          return (
            <ContactIteam
              key={el.id}
              onDeleteContact={onDeleteContact}
              contact={el}
            />
          );
        })}
      </ul>
    </div>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
