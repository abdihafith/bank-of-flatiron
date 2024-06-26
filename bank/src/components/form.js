import React from "react";
import "./Form.css"
import { useState } from "react";
function TransactionForm({onSubmit}){
    const [description, setDescription] = useState('');
    const[category, setCategory] = useState('')
    const [amount, setAmount] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      onSubmit({ description, category, amount });
      setDescription('')
      setCategory('')
      setAmount('')
    }


return(
  <div className="transaction-form">
    <form onSubmit={handleSubmit}>
      <input
        className="description"
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        className="category"
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        className="amount"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Add Transaction</button>
    </form>
  </div>
)

}
export default TransactionForm;