import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar/';
import Footer from '../Footer/';
import styles from './Layout.module.css';

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.content}>
        <aside className={styles.sidebar}>
          <Sidebar />
        </aside>
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

// Outlet — это специальный компонент React Router. Он отображает содержимое текущего дочернего маршрута
