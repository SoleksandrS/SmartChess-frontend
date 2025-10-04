import styles from './AITraining.module.scss';

export function AITraining() {
  return (
    <section className={styles['ai-training']}>
      <h2>Train with AI</h2>
      <p>Improve your chess skills by playing against AI or analyzing your games.</p>
      <button className={styles['cta-button']}>Start Training</button>
    </section>
  );
}
