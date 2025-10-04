import { NavLink } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ROUTES } from 'constants/routes';
import type { SignUpForm } from './SignUp.models';

import styles from './SignUp.module.scss';

export function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>();

  const password = watch('password', '');

  const onSubmit: SubmitHandler<SignUpForm> = (data) => {
    console.log('data', data);
  };

  return (
    <section className={styles['page']}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <h2 className={styles['title']}>Sign Up</h2>

        <label className={styles['label']}>
          Username
          <input
            type="text"
            {...register('username', { required: 'Username is required' })}
            className={styles['input']}
            placeholder="Your username"
          />
          {errors.username && <span className={styles['error']}>{errors.username.message}</span>}
        </label>

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
              minLength: { value: 6, message: 'Password must be at least 6 characters' }
            })}
            className={styles['input']}
            placeholder="••••••••"
          />
          {errors.password && <span className={styles['error']}>{errors.password.message}</span>}
        </label>

        <label className={styles['label']}>
          Confirm Password
          <input
            type="password"
            {...register('confirmPassword', {
              required: 'Confirm your password',
              validate: (value) => value === password || 'Passwords do not match'
            })}
            className={styles['input']}
            placeholder="••••••••"
          />
          {errors.confirmPassword && (
            <span className={styles['error']}>{errors.confirmPassword.message}</span>
          )}
        </label>

        <button type="submit" className={styles['submit-button']}>
          Sign Up
        </button>

        <p className={styles['login-hint']}>
          Already have an account? <NavLink to={ROUTES.SIGNIN}>Sign In</NavLink>
        </p>
      </form>
    </section>
  );
}

export default SignUp;
