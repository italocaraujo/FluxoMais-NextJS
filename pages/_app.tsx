// pages/_app.tsx
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { ExpenseProvider } from '../utils/expenseContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExpenseProvider>
      <Component {...pageProps} />
    </ExpenseProvider>
  );
}

export default MyApp;
