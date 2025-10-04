import React, { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Form.module.scss';

interface IFormProps {
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  submitLabel: string;
  hint?: { text: string; link: string; path: string };
}

export function Form({ title, onSubmit, children, submitLabel, hint }: IFormProps) {
  return (
    <form onSubmit={onSubmit} className={styles['form']}>
      <h2 className={styles['title']}>{title}</h2>
      {children}
      <button type="submit" className={styles['submit-button']}>
        {submitLabel}
      </button>
      {hint && (
        <p className={styles['hint']}>
          {hint.text} <NavLink to={hint.path}>{hint.link}</NavLink>
        </p>
      )}
    </form>
  );
}
