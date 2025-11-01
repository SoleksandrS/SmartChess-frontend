import { useEffect } from 'react';
import { Button } from 'components/Button/Button';

import styles from './GameResultModal.module.scss';

export type TGameResultModalValue = 'win' | 'lose' | 'draw';

interface IGameResultModalProps {
  result: TGameResultModalValue;
  onClose: () => void;
}

export function GameResultModal({ result, onClose }: IGameResultModalProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const getTitle = () => {
    switch (result) {
      case 'win':
        return 'You Won!';
      case 'lose':
        return 'You Lost!';
      case 'draw':
        return 'It’s a Draw!';
    }
  };

  const getSubtitle = () => {
    switch (result) {
      case 'win':
        return 'Checkmate! You defeated the AI.';
      case 'lose':
        return 'The AI took your king... better luck next time.';
      case 'draw':
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
