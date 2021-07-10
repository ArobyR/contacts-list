import React from "react";

const FormularioAdd = ({ estado, dispatch }) => {
  const actionAdd = {
    type: "add",
    payload: {
      id: "12345",
      user: "hola mundo",
      phone_number: "222222"
    }
  };

  const handleAdd = () => {
      dispatch(actionAdd);
      console.log(estado)
  };

  return (
    <div className="container">
      <label className="mx-1 d-grid gap-2">
        Name: <input type="text" className="form-control" autoComplete="off" />
      </label>
      <label className="mx-1 d-grid gap-2">
        Phone number:{" "}
        <input type="text" className="form-control" autoComplete="off" />
      </label>
      <div className="mx-1 d-grid gap-2">
        <button onClick={handleAdd} className="btn btn-info mt-2">
          Agregar
        </button>
      </div>
    </div>
  );
};

export default FormularioAdd;
