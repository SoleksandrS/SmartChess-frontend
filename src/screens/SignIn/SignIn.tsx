import { NavLink } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ROUTES } from 'constants/routes';
import type { SignInForm } from './SignIn.models';

import styles from './SignIn.module.scss';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInForm>();

  const onSubmit: SubmitHandler<SignInForm> = (data) => {
    console.log('data', data);
  };

  return (
    <section className={styles['page']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <h2 className={styles['title']}>Sign In</h2>

        <label className={styles['label']}>
          Email
          <input
            type="email"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: 'Invalid email address'
              }
            })}
            className={styles['input']}
            placeholder="you@example.com"
          />
          {errors.email && <span className={styles['error']}>{errors.email.message}</span>}
        </label>

        <label className={styles['label']}>
          Password
          <input
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 6,
                message: 'Password must be at least 6 characters'
              }
            })}
            className={styles['input']}
            placeholder="••••••••"
          />
          {errors.password && <span className={styles['error']}>{errors.password.message}</span>}
        </label>

        <button type="submit" className={styles['submit-button']}>
          Sign In
        </button>

        <p className={styles['register-hint']}>
          Don’t have an account? <NavLink to={ROUTES.SIGNUP}>Sign Up</NavLink>
        </p>
      </form>
    </section>
  );
}
