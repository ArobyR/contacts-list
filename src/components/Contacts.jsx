import React, { useEffect, useReducer } from "react";
import { ContactsReducer } from "../reducers/ContactsReducers";
import FormularioAdd from "./FormularioAdd";
import TableContacts from "./TableContacts";

const init = () => {
  const conctacts = localStorage.getItem("contacts");
  return conctacts ? JSON.parse(conctacts) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
      <FormularioAdd estado={state} dispatch={dispatch} />
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default Contacts;

// utilizar memo
