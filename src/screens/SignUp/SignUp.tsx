import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { ROUTES } from 'constants/routes';
import type { SignUpForm } from './SignUp.models';
import { Form, Input } from 'components';
import { signUpThunk } from 'store/modules/auth/auth.thunk';

import styles from './SignUp.module.scss';

export function SignUp() {
  const loading = useSelector((state: TState) => state.auth.loading);
  const dispatch: AppDispatch = useDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>();

  const password = watch('password', '');

  const onSubmit: SubmitHandler<SignUpForm> = async (form) => {
    await dispatch(signUpThunk(form));
  };

  return (
    <section className={styles['page']}>
      {`${loading}`}
      <Form
        title="Sign Up"
        onSubmit={handleSubmit(onSubmit)}
        submitLabel="Sign Up"
        hint={{ text: 'Already have an account?', link: 'Sign In', path: ROUTES.SIGNIN }}>
        <Input
          label="Username"
          type="text"
          placeholder="Your username"
          register={register('username', { required: 'Username is required' })}
          error={errors.username}
        />
        <Input
          label="Email"
          type="email"
          placeholder="you@example.com"
          register={register('email', { required: 'Email is required' })}
          error={errors.email}
        />
        <Input
          label="Password"
          type="password"
          placeholder="••••••••"
          register={register('password', { required: 'Password is required' })}
          error={errors.password}
        />
        <Input
          label="Confirm Password"
          type="password"
          placeholder="••••••••"
          register={register('confirmPassword', {
            required: 'Confirm your password',
            validate: (value) => value === password || 'Passwords do not match'
          })}
          error={errors.confirmPassword}
        />
      </Form>
    </section>
  );
}

export default SignUp;
