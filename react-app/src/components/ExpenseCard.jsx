
function ExpenseCard({ title, amount, category, onDelete, onEdit }) {
  return (
    <div>
      <h3>{title}</h3>
      <h3>${amount}</h3>
      <h3>{category}</h3>

      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </div>
  );
}

export default ExpenseCard;