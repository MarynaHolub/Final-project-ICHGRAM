import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchForgotPassword } from '../../redux/thunks/thunks';
import styles from './ForgotPasswordForm.module.css';
import { validateLogin } from '../../utils/validation';

function ForgotPasswordForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(fetchForgotPassword(data));
    } catch (error) {
      console.log('Ошибка:', error);
    }
  };

  return (
    <form
      className={styles.forgotPasswordForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        className={styles.input}
        type="text"
        placeholder="Email, or Username"
        {...register('login', {
          required: 'Username, or email are required',
          validate: validateLogin,
        })}
      />

      {errors.login && <p className={styles.error}>{errors.login.message}</p>}

      <button type="submit" className={styles.button}>
        Reset your password
      </button>
    </form>
  );
}

export default ForgotPasswordForm;
