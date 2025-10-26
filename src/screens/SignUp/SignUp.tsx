import { useNavigate } from 'react-router-dom';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { api, ENDPOINTS } from 'services/api';
import { ROUTES } from 'constants/routes';
import type { SignUpForm } from './SignUp.models';
import { Form, Input } from 'components';

import styles from './SignUp.module.scss';

export function SignUp() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm<SignUpForm>();

  const password = watch('password', '');

  const onSubmit: SubmitHandler<SignUpForm> = async (form) => {
    try {
      await api.post(ENDPOINTS.SIGN_UP, form);
      await navigate(ROUTES.SIGNIN);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <section className={styles['page']}>
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
