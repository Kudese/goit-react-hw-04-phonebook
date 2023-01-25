import PropTypes from 'prop-types';
export default function ContactIteam({ contact, onDeleteContact }) {
  const { id, name, number } = contact;
  const handleGetIdContact = () => {
    onDeleteContact(id);
  };
  return (
    <li>
      {name}:{number}
      <button type="button" onClick={handleGetIdContact}>
        Delete
      </button>
    </li>
  );
}
ContactIteam.propTypes = {
 contact: PropTypes.exact({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,

 }) 
}
