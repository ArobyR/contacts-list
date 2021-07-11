import React from "react";

const FormularioAdd = ({ state, dispatch }) => {

  const handleAdd = () => {
      // dispatch(actionAdd);
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
