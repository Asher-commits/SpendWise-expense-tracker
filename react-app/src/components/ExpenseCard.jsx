
function ExpenseCard({ title, amount, category, onDelete }) {

    return (
        <>
            <h3>{title}</h3>
            <h3>{amount}</h3>
            <h3>{category}</h3>
            <button onClick={onDelete}>Delete</button>

        </>
    )
}

export default ExpenseCard