import { EChessSide, type IGameMove } from 'models';

import styles from './ChessSidebarHistory.module.scss';

interface IProps {
  moves: IGameMove[];
  onPreviewMove: (fen: string) => void;
}

export function ChessSidebarHistory({ moves, onPreviewMove }: IProps) {
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
        <div className={styles['moves-list']} onMouseLeave={() => onPreviewMove('')}>
          {moves.map(({ number, side, move, fenAfter }) => (
            <div
              key={`${number}-${side}`}
              className={styles['move-row']}
              onMouseEnter={() => fenAfter && onPreviewMove(fenAfter)}>
              <span className={styles['move-number']}>{number}.</span>
              <span
                className={`${styles['side']} ${
                  side === EChessSide.WHITE ? styles['side-white'] : styles['side-black']
                }`}>
                {side === EChessSide.WHITE ? 'White' : 'Black'}
              </span>
              <span className={styles['move']}>{formatMove(move)}</span>
            </div>
          ))}
        </div>
      )}
    </aside>
  );
}
