import { EGameStatus } from 'models';
import { Modal } from 'components/Modal/Modal';
import { Button } from 'components/Button/Button';

import styles from './ModalChessResult.module.scss';

interface IProps {
  result: EGameStatus;
  onClose: () => void;
}

export function ModalChessResult({ result, onClose }: IProps) {
  const getTitle = () => {
    switch (result) {
      case EGameStatus.WIN:
        return 'You Won!';
      case EGameStatus.LOSE:
        return 'You Lost!';
      case EGameStatus.DRAW:
        return 'It’s a Draw!';
      default:
        return '';
    }
  };

  const getSubtitle = () => {
    switch (result) {
      case EGameStatus.WIN:
        return 'Checkmate! You defeated your opponent.';
      case EGameStatus.LOSE:
        return 'Your opponent took your king... better luck next time.';
      case EGameStatus.DRAW:
        return 'Neither side could prevail.';
      default:
        return '';
    }
  };

  return (
    <Modal onClose={onClose} className={styles['modal']}>
      <div className={styles['content']}>
        <div className={`${styles['animation']} ${styles[`animation-${result}`]}`} />
        <h2 className={styles['title']}>{getTitle()}</h2>
        <p className={styles['subtitle']}>{getSubtitle()}</p>
        <Button onClick={onClose}>Close</Button>
      </div>
    </Modal>
  );
}
