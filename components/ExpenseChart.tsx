// components/ExpenseChart.tsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { useExpenses } from '../utils/expenseContext';
import styles from '../styles/ExpenseChart.module.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const ExpenseChart = () => {
  const { expenses } = useExpenses();

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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem: any) => `${tooltipItem.raw} USD`,
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
