import { useEffect, useRef, useState } from 'react';
import { AIHelpLayoutBubble, AIHelpLayoutButton } from './components';

import styles from './AIHelpLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function AIHelpLayout({ children, className }: IProps) {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const mockHelp = {
    move: 'e2 → e4',
    reason: 'This move opens the diagonal for your queen and bishop, and helps control the center.'
  };

  const onClickHandler = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(() => resolve(true), 2000));
    setIsOpen(true);
    setLoading(false);
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
        <AIHelpLayoutButton loading={loading} onClick={() => void onClickHandler()} />
      </div>
    </div>
  );
}
