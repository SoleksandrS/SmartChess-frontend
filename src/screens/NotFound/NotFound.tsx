import { Link } from 'react-router-dom';
import { Button } from 'components/Button/Button';

import styles from './NotFound.module.scss';

export function NotFound() {
  return (
    <div className={styles['content']}>
      <h1 className={styles['title']}>404</h1>
      <p className={styles['subtitle']}>This move doesn’t exist on the board.</p>
      <p className={styles['text']}>
        The page you’re looking for may have been captured — or simply doesn’t exist.
      </p>
      <Link to="/">
        <Button>Return to Home</Button>
      </Link>
    </div>
  );
}
