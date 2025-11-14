import { PuffLoader } from 'react-spinners';

import { FaRobot } from 'react-icons/fa';

import styles from './AIHelpLayoutButton.module.scss';

interface IProps {
  loading: boolean;
  disabled?: boolean;
  onClick: () => void;
}

export function AIHelpLayoutButton({ loading, disabled, onClick }: IProps) {
  return (
    <button
      className={styles['btn']}
      onClick={!loading && !disabled ? onClick : undefined}
      disabled={disabled}
      title="Ask AI for help">
      {loading ? <PuffLoader size={40} /> : <FaRobot size={22} />}
    </button>
  );
}
