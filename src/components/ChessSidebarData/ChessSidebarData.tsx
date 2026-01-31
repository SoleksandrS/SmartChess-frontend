import { useDispatch } from 'react-redux';
import type { AppDispatch } from 'store';
import { getGameAnalysisDataThunk } from 'store/modules/game-analysis/game-analysis.thunk';
import { EChessSide } from 'models';
import { Button } from 'components/Button/Button';

import styles from './ChessSidebarData.module.scss';

interface IProps {
  id: string;
  whitePlayer: string;
  blackPlayer: string;
  currentTurn: EChessSide;
  moveCount: number;
  status: 'playing' | 'win' | 'draw' | 'lose';
}

export function ChessSidebarData({
  id,
  whitePlayer,
  blackPlayer,
  currentTurn,
  moveCount,
  status
}: IProps) {
  const dispatch: AppDispatch = useDispatch();

  const handleAnalyzeGame = () => {
    void dispatch(getGameAnalysisDataThunk(id));
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'win':
        return 'You Win 🎉';
      case 'draw':
        return 'Draw 🤝';
      case 'lose':
        return 'You Lose 💀';
      default:
        return 'In Progress';
    }
  };

  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.title}>Game Info</h2>

      <div className={styles.section}>
        <h3 className={styles['section-title']}>Players</h3>
        <div className={styles['player-row']}>
          <span className={styles['label']}>White:</span>
          <span className={styles['value']}>{whitePlayer}</span>
        </div>
        <div className={styles['player-row']}>
          <span className={styles['label']}>Black:</span>
          <span className={styles['value']}>{blackPlayer}</span>
        </div>
      </div>

      <div className={styles.section}>
        <h3 className={styles['section-title']}>Game Stats</h3>
        <div className={styles['info-row']}>
          <span className={styles['label']}>Moves:</span>
          <span className={styles['value']}>{moveCount}</span>
        </div>
        <div className={styles['info-row']}>
          <span className={styles['label']}>Turn:</span>
          <span className={styles['value']}>
            {currentTurn === EChessSide.WHITE ? 'White' : 'Black'}
          </span>
        </div>
        <div className={styles['info-row']}>
          <span className={styles['label']}>Status:</span>
          <span className={styles['value']}>{getStatusLabel()}</span>
        </div>
      </div>

      {status !== 'playing' && <Button onClick={handleAnalyzeGame}>Analyze</Button>}
    </aside>
  );
}
