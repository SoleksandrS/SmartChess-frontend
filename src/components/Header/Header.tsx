import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import { ROUTES } from 'constants/routes';
import { STORAGE_KEYS } from 'constants/localStorage';
import { clearAuthData } from 'store/modules/auth/auth.actions';
import { matchmakingLeaveThunk } from 'store/modules/socket/socket.thunk';
import { HeaderDropdownMenu, HeaderMatchmaking } from 'components';

import styles from './Header.module.scss';

export function Header() {
  const userData = useSelector((state: TState) => state.auth.data);
  const matchmakingLoading = useSelector((state: TState) => state.socket.matchmakingLoading);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const onCancel = () => {
    void dispatch(matchmakingLeaveThunk());
  };

  const onLogout = () => {
    localStorage.removeItem(STORAGE_KEYS.ACCESS_TOKEN);
    dispatch(clearAuthData());
    void navigate(ROUTES.HOME);
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
            <>
              {matchmakingLoading && <HeaderMatchmaking onCancel={onCancel} />}
              <HeaderDropdownMenu username={userData.username} onLogout={onLogout} />
            </>
          )}
        </div>
      </div>
    </header>
  );
}
