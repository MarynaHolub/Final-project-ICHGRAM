import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { fetchResetPassword } from '../../redux/thunks/thunks';
import styles from './ResetPasswordForm.module.css';
import { validatePassword } from '../../utils/validation';

function ResetPasswordForm() {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await dispatch(fetchResetPassword(data));
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

      <input
        className={styles.input}
        type="password"
        placeholder="New password"
        {...register('newPassword', {
          required: 'Password is required',
          validate: validatePassword,
        })}
      />
      {errors.newPassword && (
        <p className={styles.error}>{errors.newPassword.message}</p>
      )}

      <button type="submit" className={styles.button}>
        Reset password
      </button>
    </form>
  );
}

export default ResetPasswordForm;
