import { useEffect } from 'react';
import { EGameStatus } from 'models';
import { Button } from 'components/Button/Button';

import styles from './ChessResultModal.module.scss';

interface IChessResultModalProps {
  result: EGameStatus;
  onClose: () => void;
}

export function ChessResultModal({ result, onClose }: IChessResultModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const getTitle = () => {
    switch (result) {
      case EGameStatus.WIN:
        return 'You Won!';
      case EGameStatus.LOSE:
        return 'You Lost!';
      case EGameStatus.DRAW:
        return 'It’s a Draw!';
    }
  };

  const getSubtitle = () => {
    switch (result) {
      case EGameStatus.WIN:
        return 'Checkmate! You defeated the AI.';
      case EGameStatus.LOSE:
        return 'The AI took your king... better luck next time.';
      case EGameStatus.DRAW:
        return 'Neither side could prevail.';
    }
  };

  return (
    <div className={styles['overlay']} onClick={onClose}>
      <div className={styles['modal']} onClick={(e) => e.stopPropagation()}>
        <div className={`${styles['animation']} ${styles[`animation-${result}`]}`} />
        <h2 className={styles['title']}>{getTitle()}</h2>
        <p className={styles['subtitle']}>{getSubtitle()}</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </div>
  );
}
