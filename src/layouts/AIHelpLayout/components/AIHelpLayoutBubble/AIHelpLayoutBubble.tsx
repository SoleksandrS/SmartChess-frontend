import { IoClose } from 'react-icons/io5';
import type { IAdvice } from 'layouts/AIHelpLayout/AIHelpLayout.types';

import styles from './AIHelpLayoutBubble.module.scss';

interface IProps {
  advice: IAdvice;
  onClose: () => void;
}

export function AIHelpLayoutBubble({ advice, onClose }: IProps) {
  const formatMove = (move: string) => {
    if (move.length !== 4) return move;
    return `${move.slice(0, 2)} → ${move.slice(2, 4)}`;
  };

  return (
    <div className={styles['bubble']}>
      <button className={styles['close']} onClick={onClose}>
        <IoClose size={18} />
      </button>

      <h3 className={styles['title']}>AI Assistant</h3>

      <p className={styles['move']}>
        <strong>Best move:</strong> {formatMove(advice.move)}
      </p>
      <p className={styles['explanation']}>{advice.reason}</p>

      <div className={styles['arrow']} />
    </div>
  );
}
