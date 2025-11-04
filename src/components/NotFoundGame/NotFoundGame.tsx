import { useNavigate } from 'react-router-dom';
import { FaChessKnight } from 'react-icons/fa';
import { Button } from 'components/Button/Button';

import styles from './NotFoundGame.module.scss';

export function NotFoundGame() {
  const navigate = useNavigate();

  const onClick = () => {
    void navigate('/');
  };

  return (
    <div className={styles['not-found']}>
      <div className={styles['icon-wrapper']}>
        <FaChessKnight className={styles['icon']} size={80} />
      </div>
      <h2 className={styles['title']}>Game Not Found</h2>
      <p className={styles['message']}>
        It seems this chess game doesn’t exist or has already been finished.
      </p>

      <Button onClick={onClick}>Go to Home</Button>
    </div>
  );
}
