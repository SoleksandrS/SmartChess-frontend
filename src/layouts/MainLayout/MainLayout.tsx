import { Outlet } from 'react-router-dom';
import { Header, Footer } from 'components';

import styles from './MainLayout.module.scss';

export function MainLayout() {
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
