import { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import ExpenseForm from './ExpenseForm';
import { useExpenses } from '../utils/expenseContext';
import styles from '../styles/ExpenseList.module.css';

// Define um tipo para a despesa
interface Expense {
  id: string;
  name: string;
  amount: number;
  category: string;
  color: string;
}

const ExpenseList = () => {
  const { expenses, deleteExpense, editExpense } = useExpenses();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [expenseToEdit, setExpenseToEdit] = useState<Expense | undefined>(undefined);

  // Define o tipo do parâmetro 'expense'
  const openEditModal = (expense: Expense) => {
    setExpenseToEdit(expense); // Define a despesa selecionada para edição
    setIsEditModalOpen(true); // Abre o modal de edição
  };

  const closeEditModal = () => {
    setExpenseToEdit(undefined); // Limpa a despesa selecionada
    setIsEditModalOpen(false); // Fecha o modal de edição
  };

  // Define o tipo do parâmetro 'updatedExpense'
  const handleEdit = (updatedExpense: Expense) => {
    if (expenseToEdit) {
      editExpense(expenseToEdit.id, updatedExpense); // Atualiza a despesa no contexto
      closeEditModal(); // Fecha o modal após salvar as alterações
    }
  };

  return (
    <div className={styles.expenseListContainer}>
      {expenses.map((expense: Expense) => (
        <ExpenseItem
          key={expense.id}
          name={expense.name}
          amount={expense.amount}
          category={expense.category}
          color={expense.color}
          onEdit={() => openEditModal(expense)}
          onDelete={() => deleteExpense(expense.id)}
        />
      ))}

      {/* Modal de edição */}
      {isEditModalOpen && expenseToEdit && (
        <div className={styles.modalOverlay} onClick={closeEditModal}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeEditModal}>X</button>
            <h2>Editar Despesa</h2>
            <ExpenseForm
              onClose={closeEditModal}
              onSubmit={handleEdit} // Passa o manipulador para salvar as alterações
              initialData={expenseToEdit} // Preenche o formulário com os dados da despesa selecionada
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ExpenseList;
