import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  ContactBtn,
  ContactItem,
  ContactText,
  ListUl,
} from './ContactList.styled';
import { Loader } from 'components/Loader/Loader';
import { deleteContact, fetchContacts } from 'redux/contacts/operations';
import { selectFilteredContacts } from 'redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  // const isContactExist = useSelector(state =>
  //   Boolean(state.contacts.items.length)
  // );
  // useEffect(() => {
  //   !isContactExist && dispatch(fetchContacts());
  // }, [dispatch, isContactExist]);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // const filteredContacts = useMemo(
  //   () => contacts.filter(contact => contact.name.includes(filter)),
  //   [filter, contacts]
  // );

  const removeUser = id => {
    dispatch(deleteContact(id));
  };

  const isLoading = useSelector(state => state.contacts.isLoading);
  return (
    <ListUl>
      {isLoading ? <Loader /> : null}
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactItem key={id}>
            <ContactText>
              {name}: {number}
            </ContactText>
            <ContactBtn onClick={() => removeUser(id)}>Delete</ContactBtn>
          </ContactItem>
        );
      })}
    </ListUl>
  );
};
