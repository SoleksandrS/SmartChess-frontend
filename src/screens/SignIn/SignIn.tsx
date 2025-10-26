import { useForm, type SubmitHandler } from 'react-hook-form';
import { api, ENDPOINTS } from 'services/api';
import { ROUTES } from 'constants/routes';
import { STORAGE_KEYS } from 'constants/localStorage';
import type { SignInForm } from './SignIn.models';
import { Form, Input } from 'components';

import styles from './SignIn.module.scss';

export function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInForm>();

  const onSubmit: SubmitHandler<SignInForm> = async (form) => {
    try {
      const { data } = await api.post<{ access_token: string }>(ENDPOINTS.SIGN_IN, form);
      localStorage.setItem(STORAGE_KEYS.ACCESS_TOKEN, data.access_token);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <section className={styles['page']}>
      <Form
        title="Sign In"
        onSubmit={handleSubmit(onSubmit)}
        submitLabel="Sign In"
        hint={{ text: "Don't have an account?", link: 'Sign Up', path: ROUTES.SIGNUP }}>
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
      </Form>
    </section>
  );
}
