// components/ExpenseList.tsx
import { useExpenses } from '../utils/expenseContext';
import ColorIndicator from './ColorIndicator';

const ExpenseList = () => {
  const { expenses, deleteExpense, editExpense } = useExpenses();

  return (
    <ul>
      {expenses.map((expense) => (
        <li key={expense.id}>
          <ColorIndicator color={expense.color} />
          <span>{expense.name} - {expense.amount}</span>
          <input type="checkbox" />
          <button onClick={() => editExpense(expense.id, { ...expense })}>Editar</button>
          <button onClick={() => deleteExpense(expense.id)}>Excluir</button>
        </li>
      ))}
    </ul>
  );
};

export default ExpenseList;
