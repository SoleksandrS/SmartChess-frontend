import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import { ROUTES } from 'constants/routes';
import { STORAGE_KEYS } from 'constants/localStorage';
import { clearAuthData } from 'store/modules/auth/auth.actions';
import { HeaderDropdownMenu } from 'components';

import styles from './Header.module.scss';

export function Header() {
  const userData = useSelector((state: TState) => state.auth.data);
  const dispatch: AppDispatch = useDispatch();

  const onLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    dispatch(clearAuthData());
  };

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
            <HeaderDropdownMenu username={userData.username} onLogout={onLogout} />
          )}
        </div>
      </div>
    </header>
  );
}
