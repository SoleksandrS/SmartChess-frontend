import { useState } from 'react';

import { FaRobot } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

import styles from './AIHelpLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function AIHelpLayout({ children, className }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const mockHelp = {
    move: 'e2 → e4',
    reason: 'This move opens the diagonal for your queen and bishop, and helps control the center.'
  };

  return (
    <div className={`${styles['wrapper']} ${className}`}>
      {children}

      {isOpen && (
        <div className={styles['bubble']}>
          <button className={styles['close']} onClick={() => setIsOpen(false)}>
            <IoClose size={18} />
          </button>

          <h3 className={styles['title']}>AI Assistant</h3>

          {mockHelp.move ? (
            <>
              <p className={styles['move']}>
                <strong>Best move:</strong> {mockHelp.move}
              </p>
              <p className={styles['explanation']}>{mockHelp.reason}</p>
            </>
          ) : (
            <p className={styles['loading']}>Analyzing position...</p>
          )}

          <div className={styles['arrow']} />
        </div>
      )}

      <button
        className={styles['ai-help-button']}
        onClick={() => setIsOpen(true)}
        title="Ask AI for help">
        <FaRobot size={22} />
      </button>
    </div>
  );
}
