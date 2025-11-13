import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

import { FaRobot, FaUserFriends, FaTimes } from 'react-icons/fa';

import styles from './ModalNewGame.module.scss';

interface ModalNewGameProps {
  onClose: () => void;
  onSelect: (mode: 'ai' | 'player') => void;
}

export function ModalNewGame({ onClose, onSelect }: ModalNewGameProps) {
  return (
    <Modal onClose={onClose} className={styles['modal']}>
      <button className={styles['close-btn']} onClick={onClose}>
        <FaTimes size={18} />
      </button>

      <h2 className={styles['title']}>Create New Game</h2>
      <p className={styles['subtitle']}>Choose how you want to play</p>

      <div className={styles['options']}>
        <div className={styles['option']} onClick={() => onSelect('ai')}>
          <FaRobot size={40} className={styles['icon']} />
          <h3>Play vs AI</h3>
          <p>Challenge our smart chess bot.</p>
        </div>

        <div className={styles['option']} onClick={() => onSelect('player')}>
          <FaUserFriends size={40} className={styles['icon']} />
          <h3>Play vs Player</h3>
          <p>Invite or wait for another player.</p>
        </div>
      </div>

      <div className={styles['actions']}>
        <Button onClick={onClose} variant="secondary">
          Cancel
        </Button>
      </div>
    </Modal>
  );
}
