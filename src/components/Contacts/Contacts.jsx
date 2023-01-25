import { Component } from 'react';
import s from '../Contacts/Contacts.module.css';
import ContactFiler from './ContactFilter/ContactFilter';
import ContactIteam from './ContactIteam/ContacIteam';
import PropTypes from 'prop-types';
export default class Contacts extends Component {
  state = {
    filter: '',
  };
  handleFiletrContacts = e => {
    const searh = e.target.value;

    this.setState({ filter: searh });
  };
  render() {
    let list = this.props.contacts.filter(el =>
      el.name.toLowerCase().includes(this.state.filter.toLowerCase())
    );
    return (
      <div className={s.conteiner}>
        <h2>Contacts</h2>
        <ContactFiler
          filter={this.state.filter}
          onFilterContacts={this.handleFiletrContacts}
        />
        <ul>
          {list.map(el => {
            return (
              <ContactIteam key={el.id}
                onDeleteContact={this.props.onDeleteContact}
                contact={el}
              />
            );
          })}
        </ul>
      </div>
    );
  }
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
