import { User } from "~/domain/entities/user";
import { chatState } from "./state";

export const saveNewContact = (state: chatState, newContact: User) => ({ ...state, contact: [...state.contacts, newContact] });