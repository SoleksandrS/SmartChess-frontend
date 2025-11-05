import { useNavigate } from 'react-router-dom';
import { ROUTES } from 'constants/routes';
import { Button } from 'components';

import { FaChessKnight } from 'react-icons/fa';

import styles from './NotFoundGame.module.scss';

export function NotFoundGame() {
  const navigate = useNavigate();

  const onClick = () => {
    void navigate(ROUTES.GAMES);
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

      <Button onClick={onClick}>Go to Games</Button>
    </div>
  );
}
