import create from "zustand/react"
import { PublicationState } from "./state"
export const publicationStore = create<PublicationState>(set => ({
    myPublications: [],
    publicationSelected: undefined,
    selectPublication: (publication) => set((state) => ({ ...state, publicationSelected: publication }))
}))