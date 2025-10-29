import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { setNavigator } from 'utils/navigation';
import { Header, Footer } from 'components';

import styles from './MainLayout.module.scss';

export function MainLayout() {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigator(navigate);
  }, [navigate]);

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
