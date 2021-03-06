import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const initialValueForm = { user_name: "", phone_number: "" }

const FormularioAdd = ({ dispatch }) => {  
  const [data, setData] = useState(initialValueForm);
  const { user_name, phone_number } = data;

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const actionAdd = {
    type: "add",
    payload: {
      id: uuid(),
      user_name,
      phone_number,
    },
  };
  const handleAdd = () => {
    dispatch(actionAdd);
    setData(initialValueForm)
  };

  return (
    <div className="container mt-3">
      <label className="m-1 d-grid gap-2">
        Name:{" "}
        <input
          onChange={handleChange}
          name="user_name"
          type="text"
          value={user_name}
          className="form-control"
          autoComplete="off"
        />
      </label>
      <label className="m-1 d-grid gap-2">
        Phone number:{" "}
        <input
          onChange={handleChange}
          type="text"
          name="phone_number"
          value={phone_number}
          className="form-control"
          autoComplete="off"
        />
      </label>
      <div className="mx-1 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-primary mt-2">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default FormularioAdd;
