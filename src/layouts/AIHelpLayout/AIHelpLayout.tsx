import { FaRobot } from 'react-icons/fa';

import styles from './AIHelpLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function AIHelpLayout({ children, className }: IProps) {
  return (
    <div className={`${styles['wrapper']} ${className}`}>
      {children}
      <button className={styles['ai-help-button']} title="Ask AI for help">
        <FaRobot size={22} />
      </button>
    </div>
  );
}
