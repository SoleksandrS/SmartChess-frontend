import React, { type ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'components';

import styles from './Form.module.scss';

interface IProps {
  title: string;
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: ReactNode;
  submitLabel: string;
  hint?: { text: string; link: string; path: string };
}

export function Form({ title, onSubmit, children, submitLabel, hint }: IProps) {
  return (
    <form onSubmit={onSubmit} className={styles['form']}>
      <h2 className={styles['title']}>{title}</h2>
      {children}
      <Button type="submit" variant="primary">
        {submitLabel}
      </Button>
      {hint && (
        <p className={styles['hint']}>
          {hint.text} <NavLink to={hint.path}>{hint.link}</NavLink>
        </p>
      )}
    </form>
  );
}
