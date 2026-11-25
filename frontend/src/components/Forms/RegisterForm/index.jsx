import { fetchRegisterUser } from '../../../redux/thunks/thunks.js';
import styles from './RegisterForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from '../../../utils/validation.js';

function RegisterForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(fetchRegisterUser(data)).unwrap();
    } catch (error) {
      console.log('Ошибка:', error);
    }
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Email"
        {...register('email', {
          required: 'Email is required',
          validate: validateEmail,
        })}
      />
      {errors.email && <p className={styles.error}>{errors.email.message}</p>}

      <input
        className={styles.input}
        type="text"
        placeholder="Full Name"
        {...register('fullname')}
      />
      {errors.fullname && (
        <p classnName={styles.error}>{errors.fullname.message}</p>
      )}

      <input
        className={styles.input}
        type="text"
        placeholder="Userame"
        {...register('username', {
          required: 'Userame is required',
          validate: validateUsername,
        })}
      />
      {errors.username && (
        <p className={styles.error}>{errors.username.message}</p>
      )}

      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'Password is required',
          validate: validatePassword,
        })}
      />
      {errors.password && (
        <p className={styles.error}>{errors.password.message}</p>
      )}

      <div className={styles.textContent}>
        <p className={styles.text}>
          People who use our service may have uploaded your contact information
          to Instagram.<span className={styles.span}>Learn More</span>
        </p>
        <p className={styles.text}>
          By signing up, you agree to our <span className={styles.span}>Terms</span>,
          <span className={styles.span}>Privacy Policy</span> and <span className={styles.span}>Cookies Policy</span>.
        </p>
      </div>

      <button type="submit" className={styles.button}>
        Sign up
      </button>
    </form>
  );
}
export default RegisterForm;

// dispatch(loginUser(data)) — запускает асинхронный Redux thunk.
// unwrap() — позволяет получить результат запроса или поймать ошибку через catch
