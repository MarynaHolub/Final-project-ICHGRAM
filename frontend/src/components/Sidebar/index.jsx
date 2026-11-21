import styles from './Sidebar.module.css';
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.container}>
        <NavLink to={'/'}>
          <img src="/logo.svg" alt="logo" />
        </NavLink>
         <NavLink to={'/'}>
          <img src="../assets/home.svg" alt="home" />
          <span>Home</span>
        </NavLink>



      </div>
    </div>
  );
}
export default Sidebar;

// NavLink автоматически добавляет класс active, когда текущий URL соответствует маршруту