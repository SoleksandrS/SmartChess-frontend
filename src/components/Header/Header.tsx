import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { ROUTES } from 'constants/routes';

import { FaUserCircle } from 'react-icons/fa';

import styles from './Header.module.scss';

export function Header() {
  const userData = useSelector((state: TState) => state.auth.data);

  return (
    <header className={styles['header']}>
      <div className={styles['header-container']}>
        <NavLink to={ROUTES.HOME} className={styles['logo-section']}>
          <div className={styles['logo-placeholder']}></div>
          <h1 className={styles['title']}>SmartChess</h1>
        </NavLink>

        <div className={styles['user-section']}>
          {!userData ? (
            <NavLink to={ROUTES.SIGNIN} className={styles['auth-button']}>
              Sign In
            </NavLink>
          ) : (
            <div className={styles['user-data']}>
              <div className={styles['profile-icon']}>
                <FaUserCircle size={28} />
              </div>
              <span className={styles['username']}>{userData.username}</span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
