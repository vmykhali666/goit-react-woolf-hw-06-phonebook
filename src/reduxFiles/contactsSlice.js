import { createSlice, nanoid } from "@reduxjs/toolkit";
import { contactsInitialState } from "./initialState";

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: contactsInitialState,
    reducers: {
        addContact:{
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare({name, phone}) {
                return {
                    payload: {
                        id: nanoid(),
                        name,
                        phone
                    }
                }
            }
        },
        removeContact: {
            reducer(state, action) {
                return state.filter(contact => contact.id !== action.payload);
            }
        }
    }
});

export const contactsReducer = contactsSlice.reducer;
export const { addContact, removeContact } = contactsSlice.actions;
