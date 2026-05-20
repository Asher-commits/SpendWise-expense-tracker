import { useState } from "react"

function ExpenseForm({onAddExpenses}) {

    const [title, setTitle] = useState("");

    const [amount, setAmount] = useState("");

    const [category, setCategory] = useState("Food");

    function handleSubmit(e) {
        e.preventDefault()

        if (title.trim() === "" || amount === "" || isNaN(amount)) {
            alert("All values is require");
            return;
        }


        const newExpense = {
            title: title,
            amount: amount,
            category: category
        };

        onAddExpenses(newExpense)

        console.log(newExpense)


    setTitle("");
    setAmount("");
    setCategory("Food");

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Title: <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} /></label>
                <label>Amount: <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} /></label>
                <label>Category:
                    <select value={category} onChange={(e) => setCategory(e.target.value)}>
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
                    <button type="submit">Add Expense</button>

                </label>

            </form>
        </>
    )
}

export default ExpenseForm