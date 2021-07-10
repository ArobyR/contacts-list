import React, { useReducer } from "react";
import { ContactsReducer } from "../reducers/ContactsReducers";
import FormularioAdd from "./FormularioAdd";
import TableContacts from "./TableContacts";

const Contacts = () => {
  const contacts = [
    {
      id: "gf22",
      user: "jimena",
      phone_number: "84849849849",
    },
    {
      id: "gf21",
      user: "pepa",
      phone_number: "8484f984984",
    },
  ];
  const [state, dispatch] = useReducer(ContactsReducer, contacts);
  console.log(state);

  return (
    <div className="container mt-3">
      <FormularioAdd estado={state} dispatch={dispatch} />
      <TableContacts contacts={state} />
    </div>
  );
};

export default Contacts;
