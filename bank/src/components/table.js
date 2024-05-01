import React from "react";
import "./table.css";
import TableRowTransaction from "./tablerow";

function TableTransaction({transactions, onDelete}) {
    return(
    <div className="transaction-table">
    <table >
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Actions</th>
        </tr>
      </thead>
      {/* <tbody className="my-body">
        {transactions.map((transaction) => (
          <TableRowTransaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
        ))}
      </tbody> */}
      <tbody className="my-body">
  {transactions ? (
    transactions.map((transaction) => (
      <TableRowTransaction key={transaction.id} transaction={transaction} onDelete={onDelete} />
    ))
  ) : (
    <tr>
      <td colSpan="3">Loading...</td>
    </tr>
  )}
</tbody>

    </table>  
   </div>     
    )
}
export default TableTransaction;