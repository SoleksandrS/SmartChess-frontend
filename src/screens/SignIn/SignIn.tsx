import { useForm, type SubmitHandler } from 'react-hook-form';
import { ROUTES } from 'constants/routes';
import type { SignInForm } from './SignIn.models';
import { Form, Input } from 'components';

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
