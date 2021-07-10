import React from "react";

const TableContacts = ({ contacts }) => {
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
            <th>{conctact.id}</th>
            <td>{conctact.user}</td>
            <td>{conctact.phone_number}</td>
            <td>
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableContacts;
