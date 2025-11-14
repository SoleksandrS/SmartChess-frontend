import { FaRobot } from 'react-icons/fa';

import styles from './AIHelpLayoutButton.module.scss';

interface IProps {
  onClick: () => void;
}

export function AIHelpLayoutButton({ onClick }: IProps) {
  return (
    <button className={styles['btn']} onClick={onClick} title="Ask AI for help">
      <FaRobot size={22} />
    </button>
  );
}
