import styles from './Login.module.css';
import stylesCommon from '../../styles/common.module.css';
import loginImage from '../../assets/img/logIn.png';
import { NavLink } from 'react-router-dom';
import LoginForm from '../../components/LoginForm';

function Login() {
  return (
    // <div className={`${styles.login} ${stylesCommon.container}`}>
    <div className={stylesCommon.container}>
      <div className={styles.wrapper}>
        <img src={loginImage} alt="login-image" className={styles.img} />
        <div className={styles.content}>
          <div className={styles.firstBlock}>
            <NavLink to="/">
              <img src="/logo.svg" alt="logo" className={styles.logo} />
            </NavLink>

            <LoginForm />

            <div className={styles.divide}>OR</div>

            <NavLink to="/forgot-password">
              <span className={styles.forgotPassword}>Forgot password?</span>
            </NavLink>
          </div>

          <div className={styles.SecondBlock}>
            <p className={styles.SecondBlockContent}>Don't have an account? </p>
            <NavLink to="/register">
              <p className={styles.SecondBlockAsk}>Sign up</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
