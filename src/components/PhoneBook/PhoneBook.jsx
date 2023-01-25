import { Component } from 'react';
import s from '../PhoneBook/PhoneBook.module.css';
export default class PhoneBook extends Component {
  state = {
    name: '',
    number: '',
  };
  onChange = e => {
    this.setState(() => {
      return { [e.target.name]: e.target.value };
    });
  };
  handleSubmitForm = e => {
    e.preventDefault();
    this.props.onCreateContact(e);
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <div className={s.conteiner}>
        <h2>PhoneBook</h2>
        <form onSubmit={this.handleSubmitForm}>
          <label>
            Name
            <input
              onChange={this.onChange}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              onChange={this.onChange}
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </div>
    );
  }
}
