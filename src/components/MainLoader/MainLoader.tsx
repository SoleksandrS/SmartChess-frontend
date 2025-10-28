import { MoonLoader } from 'react-spinners';

import styles from './MainLoader.module.scss';

export function MainLoader() {
  return (
    <div className={styles['overlay']}>
      <MoonLoader color="#4ff7b7ff" />
    </div>
  );
}
