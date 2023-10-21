import React from 'react';
import { List, Item, Btn, Text } from './Contacts.styled';

const Contacts = ({ contacts, onClickDelete }) => {
  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          <Text>
            {contact.name}: {contact.number}
          </Text>
          <Btn id={contact.id} type="button" onClick={onClickDelete}>
            Delete
          </Btn>
        </Item>
      ))}
    </List>
  );
};

export default Contacts;
