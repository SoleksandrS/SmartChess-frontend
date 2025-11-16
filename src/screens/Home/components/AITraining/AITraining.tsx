import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { ROUTES } from 'constants/routes';
import { Button } from 'components';

import styles from './AITraining.module.scss';

export function AITraining() {
  const userData = useSelector((state: TState) => state.auth.data);
  const navigate = useNavigate();

  const onClickHandler = () => {
    const path = userData ? ROUTES.GAMES : ROUTES.SIGNIN;
    void navigate(path);
  };

  return (
    <section className={styles['ai-training']}>
      <h2>Train with AI</h2>
      <p>Improve your chess skills by playing against AI or analyzing your games.</p>
      <Button variant="primary" onClick={onClickHandler}>
        Start Training
      </Button>
    </section>
  );
}
