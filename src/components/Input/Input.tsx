import type { FieldError, UseFormRegisterReturn } from 'react-hook-form';

import styles from './Input.module.scss';

interface IProps {
  label: string;
  type?: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: FieldError;
}

export function Input({ label, type = 'text', placeholder, register, error }: IProps) {
  return (
    <label className={styles['label']}>
      {label}
      <input type={type} placeholder={placeholder} {...register} className={styles['input']} />
      {error && <span className={styles['error']}>{error.message}</span>}
    </label>
  );
}
