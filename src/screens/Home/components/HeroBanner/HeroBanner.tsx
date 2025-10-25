import { Button } from 'components';

import styles from './HeroBanner.module.scss';

export function HeroBanner() {
  return (
    <section className={styles['hero-banner']}>
      <h1 className={styles['title']}>Play & Learn Chess with AI</h1>
      <p className={styles['subtitle']}>
        Improve your skills, challenge AI, and climb the leaderboard
      </p>
      <div className={styles['buttons']}>
        <Button variant="secondary">Play Now</Button>
        <Button variant="transparent">Learn Chess</Button>
      </div>
    </section>
  );
}
