import { MoonLoader } from 'react-spinners';

import styles from './HeaderMatchmaking.module.scss';

interface IProps {
  onCancel: () => void;
}

export function HeaderMatchmaking({ onCancel }: IProps) {
  return (
    <div className={styles['matchmaking']}>
      <MoonLoader color="#4ff7b7ff" size={20} />
      <span className="text-sm font-medium">Searching for an opponent...</span>

      <button className={styles['btn']} onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
}
