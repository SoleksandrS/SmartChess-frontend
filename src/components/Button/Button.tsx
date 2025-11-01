import React from 'react';
import styles from './Button.module.scss';

interface IProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'transparent';
}

export function Button({ children, onClick, type = 'button', variant = 'primary' }: IProps) {
  return (
    <button type={type} onClick={onClick} className={`${styles['button']} ${styles[variant]}`}>
      {children}
    </button>
  );
}
