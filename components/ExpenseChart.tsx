// components/ExpenseChart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend, TooltipItem } from 'chart.js';
import { useExpenses } from '../utils/expenseContext';
import styles from '../styles/ExpenseChart.module.css';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

// Definição do tipo para o contexto de despesas
interface Expense {
  id: string;
  name: string;
  amount: number;
  color: string;
}

const ExpenseChart = () => {
  // Obtém as despesas do contexto
  const { expenses } = useExpenses() as { expenses: Expense[] };

  // Dados do gráfico
  const data = {
    labels: expenses.map((expense) => expense.name),
    datasets: [
      {
        label: 'Despesas',
        data: expenses.map((expense) => expense.amount),
        backgroundColor: expenses.map((expense) => expense.color),
        borderWidth: 1,
      },
    ],
  };

  // Opções do gráfico
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          // Tipagem explícita do parâmetro `tooltipItem`
          label: (tooltipItem: TooltipItem<'bar'>) => `${tooltipItem.raw} USD`,
        },
      },
    },
  };

  return (
    <div className={styles.chartContainer}>
      <h2 className={styles.chartTitle}>Gráfico de Despesas</h2>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ExpenseChart;
