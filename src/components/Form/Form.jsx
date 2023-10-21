import React, { Component } from 'react';
import { FormButton, Label, Input, FormDiv } from './Form.styled';

const shortid = require('shortid');

export class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <FormDiv>
        <form onSubmit={this.handleSubmit}>
          <Label htmlFor={this.nameInputId}>
            Name
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              id={this.nameInputId}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              required
            />
          </Label>
          <Label htmlFor={this.numberInputId}>
            Number
            <Input
              type="tel"
              name="number"
              value={this.state.number}
              onChange={this.handleChange}
              id={this.numberInputId}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              required
            />
          </Label>
          <FormButton type="submit">Add contact</FormButton>
        </form>
      </FormDiv>
    );
  }
}
export default Form;
