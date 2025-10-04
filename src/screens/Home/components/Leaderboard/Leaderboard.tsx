import styles from './Leaderboard.module.scss';

const topPlayers = [
  { rank: 1, name: 'Magnus', rating: 2850 },
  { rank: 2, name: 'Hikaru', rating: 2800 },
  { rank: 3, name: 'AlphaZero', rating: 3000 }
];

export function Leaderboard() {
  return (
    <section className={styles['leaderboard']}>
      <h2>Top Players</h2>
      <table className={styles['table']}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {topPlayers.map((p) => (
            <tr key={p.rank}>
              <td>{p.rank}</td>
              <td>{p.name}</td>
              <td>{p.rating}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
