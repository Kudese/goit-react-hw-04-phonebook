import { Component } from 'react';
import Contacts from './Contacts/Contacts';
import { nanoid } from 'nanoid';
import PhoneBook from './PhoneBook/PhoneBook';

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
export default class App extends Component {
  state = {
    contacts: [],
  };
  checkList = e => {
    const name = e.target.name.value;
    const contacts = this.state.contacts;
    let inListContact;
    contacts.forEach(el => {
      if (el.name === name) {
        inListContact = true;
      }
    });

    return inListContact;
  };
  handleDeleteContact = id => {
    this.setState(prevState => {
      const newContactsList = prevState.contacts.filter(contact => {
        return contact.id !== id;
      });

      return { contacts: newContactsList };
    });
  };
  handleCreateContact = e => {
    const name = e.target.name.value;
    const number = e.target.number.value;
    if (this.checkList(e)) {
      alert(`${name} is already in contact`);
    } else {
      this.setState(({ contacts: prevContacts }) => ({
        contacts: [
          ...prevContacts,
          {
            id: nanoid(),
            name: name,
            number: number,
          },
        ],
      }));
    }
  };
  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem("contacts"))|| BaseContact
    this.setState({contacts})
  }
  componentDidUpdate(_, prevState){
   
    if(prevState.contacts.length !== this.state.contacts.length){
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  render() {
    return (
      <>
        <PhoneBook onCreateContact={this.handleCreateContact} />
        <Contacts
          onDeleteContact={this.handleDeleteContact}
          contacts={this.state.contacts}
        />
      </>
    );
  }
}
