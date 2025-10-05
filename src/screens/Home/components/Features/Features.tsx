import styles from './Features.module.scss';

const featuresList = [
  { title: 'Play vs AI', description: 'Challenge AI at different levels and improve your game.' },
  { title: 'Learn Chess', description: 'Interactive lessons, puzzles, and tutorials.' },
  { title: 'Analyze Your Games', description: 'Review games and get AI insights to improve.' }
];

export function Features() {
  return (
    <section className={styles['features']}>
      {featuresList.map((f) => (
        <div key={f.title} className={styles['feature-card']}>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </section>
  );
}
