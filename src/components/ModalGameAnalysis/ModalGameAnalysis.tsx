import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { Modal } from 'components/Modal/Modal';

import { FaTimes, FaRobot } from 'react-icons/fa';

import styles from './ModalGameAnalysis.module.scss';

interface IProps {
  onClose: () => void;
}

export function ModalGameAnalysis({ onClose }: IProps) {
  const loading = useSelector((state: TState) => state.gameAnalysis.loading);
  const analysis = useSelector((state: TState) => state.gameAnalysis.data);

  return (
    <Modal onClose={onClose} className={styles.modal}>
      <button className={styles['close-btn']} onClick={onClose}>
        <FaTimes size={18} />
      </button>

      <h2 className={styles['title']}>
        <FaRobot className={styles['title-icon']} />
        Game Analysis
      </h2>

      {loading ? (
        <div className={styles['loader']}>
          <div className={styles['spinner']} />
          <p>Analyzing your game...</p>
        </div>
      ) : (
        <div className={styles['analysis']}>{analysis || 'No analysis available.'}</div>
      )}
    </Modal>
  );
}
