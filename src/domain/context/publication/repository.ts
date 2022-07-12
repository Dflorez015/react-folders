import { Publication } from "~/domain/entities/publication";

export interface PublicationState {
    myPublications:                               Publication[]
    publicationSelected?:                           Publication
    selectPublication:       (publication: Publication) => void
}