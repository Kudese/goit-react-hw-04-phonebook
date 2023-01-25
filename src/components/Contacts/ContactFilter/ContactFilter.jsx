import PropTypes from 'prop-types';
export default function ContactFiler({onFilterContacts, filter}) {
  return (<>  <h3>Find by name</h3>
        <input onChange={onFilterContacts} value={filter} ></input>
        </>)
}
ContactFiler.propTypes={
filter: PropTypes.string.isRequired,
}