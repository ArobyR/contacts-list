import React from "react";

const TableContacts = ({ contacts = [], dispatch }) => {
  const handleDelete = (id) => {
    const deleteAction = {
      type: "delete",
      payload: id,
    };
    dispatch(deleteAction);
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID:</th>
          <th>Name:</th>
          <th>Phone number:</th>
          <th>Actions:</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((conctact) => (
          <tr key={conctact.id}>
            <th>{conctact.id.split("-")[0]}</th>
            <td>{conctact.user_name}</td>
            <td>{conctact.phone_number}</td>
            <td>
              <button className="btn btn-danger" onClick={() => handleDelete(conctact.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContacts;
