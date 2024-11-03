import { useState } from 'react';
import styles from '../styles/ExpenseItem.module.css';

interface ExpenseItemProps {
  name: string;
  amount: number;
  category: string;
  color: string;
  onEdit: () => void;
  onDelete: () => void;
}

const ExpenseItem: React.FC<ExpenseItemProps> = ({ name, amount, category, color, onEdit, onDelete }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCheckboxChange = () => {
    setIsSelected((prev) => !prev);
  };

  return (
    <div className={`${styles.expenseItem} ${isSelected ? styles.expenseItemSelected : ''}`}>
      <input
        type="checkbox"
        className={styles.checkbox}
        checked={isSelected}
        onChange={handleCheckboxChange}
      />
      <div className={styles.expenseInfo} style={{ color: '#151515' }}>
        <span className={styles.colorIndicator} style={{ backgroundColor: color }}></span>
        <span className={styles.expenseName}>{name}</span>
        <span className={styles.expenseAmount}>${amount.toFixed(2)}</span>
        <span className={styles.expenseCategory}>{category}</span>
      </div>

      <div className={styles.actions}>
        <button className={styles.editButton} onClick={onEdit}>
          ✏️ Editar
        </button>
        <button className={styles.deleteButton} onClick={onDelete}>
          🗑️ Excluir
        </button>
      </div>
    </div>
  );
};

export default ExpenseItem;
