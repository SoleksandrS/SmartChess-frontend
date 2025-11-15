import styles from './MatchmakingModal.module.scss';

interface IProps {
  onCancel: () => void;
}

export function MatchmakingModal({ onCancel }: IProps) {
  return (
    <div className={styles['overlay']}>
      <div className={styles['modal']}>
        <h2 className={styles['title']}>Searching for an opponent...</h2>
        <p className={styles['description']}>
          You are in the matchmaking queue. Please wait while we find a suitable opponent.
        </p>
        <button className={styles['cancel-button']} onClick={onCancel}>
          Cancel Search
        </button>
      </div>
    </div>
  );
}
