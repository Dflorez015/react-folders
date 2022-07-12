import create from 'zustand'
import { saveNewContact } from './useCase'
import { chatState, initialUser } from './state'

export const chatStore = create<chatState>(set => ({
    user: initialUser,
    contacts: [],
    addContact: (contact) => set((state) => saveNewContact(state, contact))
}))