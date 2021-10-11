import React, { useEffect, useReducer, useState } from "react";
import { ContactsReducer } from "../reducers/ContactsReducers";
import FormularioAdd from "./FormularioAdd";
import TableContacts from "./TableContacts";

const init = () => {
  const conctacts = localStorage.getItem("contacts");
  return conctacts ? JSON.parse(conctacts) : [];
};

const Contacts = () => {
  const [state, dispatch] = useReducer(ContactsReducer, [], init);
  const [formView, setFormView] = useState(false);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(state));
  }, [state]);

  return (
    <div className="container mt-3">
      <button
        onClick={() => setFormView(!formView)}
        className={formView ? "btn btn-danger" : "btn btn-success"}
      >
        {formView ? "Close" : "Add contact"}
      </button>
      {formView && <FormularioAdd dispatch={dispatch} />}
      <TableContacts contacts={state} dispatch={dispatch} />
    </div>
  );
};

export default React.memo(Contacts);
