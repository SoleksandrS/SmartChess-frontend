import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { ROUTES } from 'constants/routes';
import { Button } from 'components';

import styles from './HeroBanner.module.scss';

interface IProps {
  onModalOpen: () => void;
}

export function HeroBanner({ onModalOpen }: IProps) {
  const userData = useSelector((state: TState) => state.auth.data);
  const navigate = useNavigate();

  const onClickHandler = () => {
    const path = userData ? ROUTES.GAMES : ROUTES.SIGNIN;
    void navigate(path);
  };

  return (
    <section className={styles['hero-banner']}>
      <h1 className={styles['title']}>Play & Learn Chess with AI</h1>
      <p className={styles['subtitle']}>
        Improve your skills, challenge AI, and climb the leaderboard
      </p>
      <div className={styles['buttons']}>
        <Button variant="secondary" onClick={onClickHandler}>
          Play Now
        </Button>
        <Button variant="transparent" onClick={onModalOpen}>
          Learn Chess
        </Button>
      </div>
    </section>
  );
}
