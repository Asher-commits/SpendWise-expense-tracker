import ExpenseForm from "./components/ExpenseForm";
import ExpenseCard from "./components/ExpenseCard";
import { useState } from "react";

function App() {
  const [expense, setExpense] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function addExpenses(newExpense) {
    if (editIndex !== null) {
      setExpense((prev) =>
        prev.map((item, index) =>
          index === editIndex ? newExpense : item
        )
      );

      setEditIndex(null);
      return;
    }

    setExpense((prev) => [...prev, newExpense]);
  }

  function deleteTask(indexToDelete) {
    setExpense((prev) =>
      prev.filter((_, index) => index !== indexToDelete)
    );
  }

  return (
    <>
      <h1>Expense Tracker</h1>

      <ExpenseForm
        onAddExpenses={addExpenses}
        editExpense={editIndex !== null ? expense[editIndex] : null}
      />

      {expense.length > 0 && <h2>Expense List</h2>}

      {expense.map((exp, ind) => (
        <ExpenseCard
          key={ind}
          title={exp.title}
          amount={exp.amount}
          category={exp.category}
          onDelete={() => deleteTask(ind)}
          onEdit={() => setEditIndex(ind)}
        />
      ))}
    </>
  );
}

export default App;