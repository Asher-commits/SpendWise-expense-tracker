
import { useState, useEffect } from "react";

function ExpenseForm({ onAddExpenses, editExpense }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  // fill form when editing
  useEffect(() => {
    if (editExpense) {
      setTitle(editExpense.title);
      setAmount(editExpense.amount);
      setCategory(editExpense.category);
    }
  }, [editExpense]);

  function handleSubmit(e) {
    e.preventDefault();

    if (title.trim() === "" || amount === "" || isNaN(amount)) {
      alert("All values are required");
      return;
    }

    const newExpense = {
      title,
      amount,
      category,
    };

    onAddExpenses(newExpense);

    setTitle("");
    setAmount("");
    setCategory("Food");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>

      <label>
        Amount:
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </label>

      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>Food</option>
          <option>Transport</option>
          <option>Rent</option>
          <option>Utilities</option>
          <option>Shopping</option>
          <option>Entertainment</option>
          <option>Health</option>
          <option>Education</option>
          <option>Travel</option>
          <option>Miscellaneous</option>
        </select>
      </label>

      <button type="submit">
        {editExpense ? "Update Expense" : "Add Expense"}
      </button>
    </form>
  );
}

export default ExpenseForm;