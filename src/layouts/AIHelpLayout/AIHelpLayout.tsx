import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { EChessSide } from 'models';
import { AIHelpLayoutBubble, AIHelpLayoutButton } from './components';
import type { IAdvice } from './AIHelpLayout.types';

import styles from './AIHelpLayout.module.scss';

interface IProps {
  children: React.ReactNode;
  className?: string;
}

export function AIHelpLayout({ children, className }: IProps) {
  const userData = useSelector((state: TState) => state.auth.data);
  const game = useSelector((state: TState) => state.game.data);

  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const isBtnAvailable = useMemo(() => {
    if (!userData || !game || game.result) return false;

    const isWhite = game.turn === EChessSide.WHITE && game.whitePlayerId === userData.id;
    const isBlack = game.turn === EChessSide.BLACK && game.blackPlayerId === userData.id;

    return isWhite || isBlack;
  }, [userData, game]);

  const mockAdvice: IAdvice = {
    move: 'e2e4',
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
        {isOpen && <AIHelpLayoutBubble advice={mockAdvice} onClose={() => setIsOpen(false)} />}
        <AIHelpLayoutButton
          loading={loading}
          disabled={!isBtnAvailable}
          onClick={() => void onClickHandler()}
        />
      </div>
    </div>
  );
}
