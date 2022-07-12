import { User } from "./user";

export interface Publication {
    from:                   User;
    to?:                    User;
    content:              string;
    title:                string;
    likes:                number;
    dateAt:               string;
    responses?:     Publication[]
}