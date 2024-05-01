import React from "react";
import "./tablerow.css"

function TableRowTransaction ({ transaction, onDelete }) {
    return (
    <div className="table-row">
      <tr>
        <td>{transaction.date}</td>
        <td>{transaction.description}</td>
        <td>{transaction.category}</td>
        <td>{transaction.amount}</td>
        <td>
          <button onClick={() => onDelete(transaction.id)}>Delete</button>
        </td>
      </tr>
    </div>
    );
  };


  export default TableRowTransaction;