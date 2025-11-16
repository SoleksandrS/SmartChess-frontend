import { useState } from 'react';
import { ModalChessRules } from 'components';
import { AITraining, Features, HeroBanner, Leaderboard } from './components';

import styles from './Home.module.scss';

export function Home() {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles['page']}>
      <HeroBanner onModalOpen={() => setIsModalOpened(true)} />
      <Features />
      <Leaderboard />
      <AITraining />
      {isModalOpened && <ModalChessRules onClose={() => setIsModalOpened(false)} />}
    </div>
  );
}
