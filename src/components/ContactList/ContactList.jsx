import React from 'react';
import styles from 'styles/ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from 'reduxFiles/contactsSlice';
import { getContacts, getFilter } from 'reduxFiles/selectors';
import { Notification } from 'components/Notification/Notification';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleRemove = id => {
    dispatch(removeContact(id));
  };

  return (
    <>
      {filter === '' ? (
        <ul className={styles.contactsList}>
          {contacts
            .filter(contact =>
              contact.name.toLowerCase().includes(filter.toLowerCase())
            )
            .map(contact => (
              <li key={contact.id} className={styles.element}>
                {contact.name + ' : ' + contact.phone}
                <button
                  onClick={() => handleRemove(contact.id)}
                  className={styles.button}
                >
                  Delete
                </button>
              </li>
            ))}
        </ul>
      ) : (
        <Notification message="No contacts found" />
      )}
    </>
  );
};
