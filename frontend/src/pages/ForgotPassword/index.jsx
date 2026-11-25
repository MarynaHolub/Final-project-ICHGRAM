import { NavLink } from 'react-router-dom';
import styles from './ForgotPassword.module.css';
import key from '../../assets/icons/key.svg';

import ForgotPasswordForm from '../../components/Forms/ForgotPasswordForm';

function ForgotPassword() {
  return (
    <div className="container">
      <div className={styles.forgotPassword}>
        <NavLink to="/">
          <img src="/logo.svg" alt="logo" className={styles.logo} />
        </NavLink>
        <span className={styles.line}></span>

        <div className={styles.wrapper}>
          <div className={styles.content}>
            <div className={styles.firstBlock}>
              <img src={key} alt="key-image" className={styles.img} />
              <p className={styles.firstBlockTitle}>Trouble logging in?</p>
              <p className={styles.firstBlockContent}>
                Enter your email, phone, or username and we'll send you a link
                to get back into your account.
              </p>

              <ForgotPasswordForm />

              <div className={styles.divide}>OR</div>

              <NavLink to="/register">
                <span className={styles.register}>Ctreate new account</span>
              </NavLink>
            </div>

            <div className={styles.SecondBlock}>
              <NavLink to="/login">
                <p className={styles.SecondBlockLink}>Back to login</p>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ForgotPassword;
