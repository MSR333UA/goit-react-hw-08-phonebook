import { DivContainer, Title, TitleSecond } from 'components/App/App.styled';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';

export const Contacts = () => {
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
