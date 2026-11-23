import { fetchLoginUser } from '../../redux/thunks/thunks';
import styles from './LoginForm.module.css';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { validateLogin, validatePassword } from '../../utils/validation.js';

function LoginForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(fetchLoginUser(data));
    } catch (error) {
      console.log('Ошибка:', error);
    }
  };

  return (
    <form className={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
      <input
        className={styles.input}
        type="text"
        placeholder="Username, or email"
        {...register('login', {
          required: 'Username, or email are required',
          validate: validateLogin,
        })}
      />

      {errors.login && <p className={styles.error}>{errors.login.message}</p>}

      <input
        className={styles.input}
        type="password"
        placeholder="Password"
        {...register('password', {
          required: 'Password is required',
          validate: validatePassword,
        })}
      />

      {errors.password && <p className={styles.error}>{errors.password.message}</p>}

      <button type="submit" className={styles.button}>Log in</button>
    </form>
  );
}
export default LoginForm;

// dispatch(loginUser(data)) — запускает асинхронный Redux thunk.
// unwrap() — позволяет получить результат запроса или поймать ошибку через catch
