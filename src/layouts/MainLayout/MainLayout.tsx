import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';
import { getUserDataThunk } from 'store/modules/auth/auth.thunk';
import { Header, Footer } from 'components';

import styles from './MainLayout.module.scss';

export function MainLayout() {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    void dispatch(getUserDataThunk());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className={styles['main']}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
