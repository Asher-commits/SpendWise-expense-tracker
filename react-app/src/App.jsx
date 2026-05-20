import ExpenseForm from "./components/ExpenseForm"
import ExpenseCard from "./components/ExpenseCard"

import { useState } from "react"


function App() {

  const [expense, setExpense] = useState([]);

  function addExpenses(newExpense) {
    setExpense((prev) => [...prev, newExpense])
  }

  function deleteTask(indexToDelete) {

    setExpense((prev) => prev.filter((_, index) => index !== indexToDelete)
    )

  }


  return (
    <>
      <h1>Expense Tracker</h1>
      <ExpenseForm onAddExpenses={addExpenses} />

      {expense.map((exp, ind) => (
        <ExpenseCard key={ind} title={exp.title} amount={exp.amount} category={exp.category}
          onDelete={() => deleteTask(ind)}
        />
      ))}


    </>
  )
}

export default App
