import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from 'constants/routes';

import { FaUserCircle } from 'react-icons/fa';

import styles from './Header.module.scss';

export function Header() {
  const [isAuth] = useState(false);

  return (
    <header className={styles['header']}>
      <NavLink to={ROUTES.HOME} className={styles['logo-section']}>
        <div className={styles['logo-placeholder']}></div>
        <h1 className={styles['title']}>SmartChess</h1>
      </NavLink>

      <div className={styles['user-section']}>
        {!isAuth ? (
          <NavLink to={ROUTES.SIGNIN} className={styles['auth-button']}>
            Sign In
          </NavLink>
        ) : (
          <div className={styles['profile-icon']}>
            <FaUserCircle size={28} />
          </div>
        )}
      </div>
    </header>
  );
}
