import { useState } from 'react';
import { ModalChessRules } from 'components';
import { AITraining, Features, HeroBanner, Leaderboard } from './components';

import styles from './Home.module.scss';

export function Home() {
  const [isModalOpened, setIsModalOpened] = useState(true);

  return (
    <div className={styles['page']}>
      <HeroBanner />
      <Features />
      <Leaderboard />
      <AITraining />
      <ModalChessRules isOpen={isModalOpened} onClose={() => setIsModalOpened(false)} />
    </div>
  );
}
