import { useEffect, useRef, useState } from 'react';
import { AIHelpLayoutBubble, AIHelpLayoutButton } from './components';

import styles from './AIHelpLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function AIHelpLayout({ children, className }: IProps) {
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const mockHelp = {
    move: 'e2 → e4',
    reason: 'This move opens the diagonal for your queen and bishop, and helps control the center.'
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      if (!wrapper.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className={`${styles['layout']} ${className}`}>
      {children}

      <div ref={wrapperRef} className={styles['wrapper']}>
        {isOpen && <AIHelpLayoutBubble {...mockHelp} onClose={() => setIsOpen(false)} />}
        <AIHelpLayoutButton onClick={() => setIsOpen(true)} />
      </div>
    </div>
  );
}
