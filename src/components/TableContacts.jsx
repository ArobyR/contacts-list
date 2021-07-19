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
        {contacts.map((contact) => (
          <tr key={contact.id}>
            <th>{contact.id.split("-")[0]}</th>
            <td>{contact.user_name}</td>
            <td>{contact.phone_number}</td>
            <td>
              <button className="btn btn-danger" onClick={() => handleDelete(contact.id)}>
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
