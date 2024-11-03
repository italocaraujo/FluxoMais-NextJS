import { useState } from 'react';
import Sidebar from './Sidebar';
import styles from '../styles/Header.module.css';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev); // Alterna o estado da sidebar
  };

  return (
    <header className={styles.header}>
      <button className={styles.menuButton} onClick={toggleSidebar}>☰</button>
      <h1 className={styles.title}>Fluxo+</h1>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </header>
  );
};

export default Header;
