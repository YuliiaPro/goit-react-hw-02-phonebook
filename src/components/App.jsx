import React, { Component } from 'react';
import Form from 'components/Form/Form';
import Contacts from 'components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import { Container } from './App.styled';

const shortid = require('shortid');

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  formSubmitHandler = ({ name, number }) => {
    const contactItem = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      this.state.contacts.some(
        contact => contact.name.toLocaleLowerCase() === name.toLocaleLowerCase()
      )
    ) {
      alert(`"${name}" is already in contacts.`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [contactItem, ...prevState.contacts],
      }));
    }
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  gerVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  deleteContact = e => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const filtred = this.state.contacts.filter(item => item.id !== id);
    this.setState({ contacts: filtred });
  };

  render() {
    const { filter } = this.state;
    const visibleContacts = this.gerVisibleContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <Contacts
          contacts={visibleContacts}
          onClickDelete={this.deleteContact}
        />
      </Container>
    );
  }
}
