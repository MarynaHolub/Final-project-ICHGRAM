import styles from './Register.module.css';
// import stylesCommon from '../../styles/common.module.css';
import { NavLink } from 'react-router-dom';
import RegisterForm from '../../components/RegisterForm';

function Register() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.firstBlock}>
            <NavLink to="/">
              <img src="/logo.svg" alt="logo" className={styles.logo} />
            </NavLink>

            <p className={styles.firstBlockTitle}>
              Sign up to see photos and videos from your friends.
            </p>
            <RegisterForm />
          </div>

          <div className={styles.SecondBlock}>
            <p className={styles.SecondBlockContent}>Have an account? </p>
            <NavLink to="/login">
              <p className={styles.SecondBlockAsk}>Log in</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
