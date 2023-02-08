import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

import { DivContainer, Title, TitleSecond } from './App.styled';

export const App = () => {
  return (
    <DivContainer>
      <Title>Phonebook</Title>
      <ContactForm />

      <TitleSecond>Contacts</TitleSecond>
      <Filter />

      <ContactList />
    </DivContainer>
  );
};
