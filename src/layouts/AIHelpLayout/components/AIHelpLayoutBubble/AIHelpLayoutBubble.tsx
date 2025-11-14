import { IoClose } from 'react-icons/io5';

import styles from './AIHelpLayoutBubble.module.scss';

interface IProps {
  move: string;
  reason: string;
  onClose: () => void;
}

export function AIHelpLayoutBubble({ move, reason, onClose }: IProps) {
  return (
    <div className={styles['bubble']}>
      <button className={styles['close']} onClick={onClose}>
        <IoClose size={18} />
      </button>

      <h3 className={styles['title']}>AI Assistant</h3>

      {move ? (
        <>
          <p className={styles['move']}>
            <strong>Best move:</strong> {move}
          </p>
          <p className={styles['explanation']}>{reason}</p>
        </>
      ) : (
        <p className={styles['loading']}>Analyzing position...</p>
      )}

      <div className={styles['arrow']} />
    </div>
  );
}
