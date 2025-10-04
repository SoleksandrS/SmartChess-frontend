import { AITraining, Features, HeroBanner, Leaderboard } from './components';

import styles from './Home.module.scss';

export function Home() {
  return (
    <div className={styles['page']}>
      <HeroBanner />
      <Features />
      <Leaderboard />
      <AITraining />
    </div>
  );
}
