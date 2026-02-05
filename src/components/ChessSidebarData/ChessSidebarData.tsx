import { EChessSide } from 'models';
import { Button } from 'components/Button/Button';

import styles from './ChessSidebarData.module.scss';

interface IProps {
  whitePlayer: string;
  blackPlayer: string;
  currentTurn: EChessSide;
  moveCount: number;
  status: 'playing' | 'win' | 'draw' | 'lose';
  isAnalysisAvailable: boolean;
  onAnalyzeGame: () => void;
}

export function ChessSidebarData({
  whitePlayer,
  blackPlayer,
  currentTurn,
  moveCount,
  status,
  isAnalysisAvailable,
  onAnalyzeGame
}: IProps) {
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

      {status !== 'playing' && (
        <Button disabled={!isAnalysisAvailable} onClick={onAnalyzeGame}>
          {isAnalysisAvailable ? 'Analyze' : 'Analyzing...'}
        </Button>
      )}
    </aside>
  );
}
