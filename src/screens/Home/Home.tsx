import { useState } from 'react';
import { ChessRulesModal } from 'components';
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
      <ChessRulesModal isOpen={isModalOpened} onClose={() => setIsModalOpened(false)} />
    </div>
  );
}
