import { useState } from 'react';
import { AIHelpLayoutBubble, AIHelpLayoutButton } from './components';

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

      {isOpen && <AIHelpLayoutBubble {...mockHelp} onClose={() => setIsOpen(false)} />}

      <AIHelpLayoutButton onClick={() => setIsOpen(true)} />
    </div>
  );
}
