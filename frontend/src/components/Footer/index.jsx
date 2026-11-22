import styles from './Footer.module.css';
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className={styles.footer}>
      <nav className={styles.nav}>
        <NavLink to="/" className={styles.link}>
          Home
        </NavLink>
        <NavLink to="/search" className={styles.link}>
          Search
        </NavLink>
        <NavLink to="/explore" className={styles.link}>
          Explore
        </NavLink>
        <NavLink to="/messages" className={styles.link}>
          Messages
        </NavLink>
        <NavLink to="/notifications" className={styles.link}>
          Notifications
        </NavLink>
        <NavLink to="/create" className={styles.link}>
          Create
        </NavLink>
      </nav>

      <p className={styles.copyright}>&copy; {new Date().getFullYear()} ICHgram</p>
    </div>
  );
}
export default Footer;
