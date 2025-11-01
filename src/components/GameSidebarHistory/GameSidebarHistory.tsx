import styles from './GameSidebarHistory.module.scss';

interface MoveRecord {
  number: number;
  side: 'w' | 'b';
  move: string; // e.g. "e2e4"
}

interface IGameSidebarHistoryProps {
  moves: MoveRecord[];
}

export function GameSidebarHistory({ moves }: IGameSidebarHistoryProps) {
  const formatMove = (move: string) => {
    if (move.length !== 4) return move;
    return `${move.slice(0, 2)} → ${move.slice(2, 4)}`;
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Move History</h2>

      {moves.length === 0 ? (
        <div className={styles['empty']}>No moves yet</div>
      ) : (
        <div className={styles['moves-list']}>
          {moves.map(({ number, side, move }) => (
            <div key={`${number}-${side}`} className={styles['move-row']}>
              <span className={styles['move-number']}>{number}.</span>
              <span
                className={`${styles['side']} ${
                  side === 'w' ? styles['side-white'] : styles['side-black']
                }`}>
                {side === 'w' ? 'White' : 'Black'}
              </span>
              <span className={styles['move']}>{formatMove(move)}</span>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
