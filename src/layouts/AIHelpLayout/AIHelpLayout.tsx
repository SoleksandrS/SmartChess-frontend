import { useEffect, useMemo, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { EChessSide } from 'models';
import { api, ENDPOINTS } from 'services/api';
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
  const [advice, setAdvice] = useState<IAdvice | null>(null);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const isBtnAvailable = useMemo(() => {
    if (!userData || !game || game.result) return false;

    const isWhite = game.turn === EChessSide.WHITE && game.whitePlayerId === userData.id;
    const isBlack = game.turn === EChessSide.BLACK && game.blackPlayerId === userData.id;

    return isWhite || isBlack;
  }, [userData, game]);

  const onClickHandler = async () => {
    if (!game) return;

    setLoading(true);

    try {
      const { data } = await api.get<IAdvice>(ENDPOINTS.GAME_ADVICE(game.id));
      setAdvice(data);
    } catch (err) {
      console.log('EXAEXA - err', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const wrapper = wrapperRef.current;
      if (!wrapper) return;

      if (!wrapper.contains(event.target as Node)) {
        setAdvice(null);
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
        {advice && <AIHelpLayoutBubble advice={advice} onClose={() => setAdvice(null)} />}
        <AIHelpLayoutButton
          loading={loading}
          disabled={!isBtnAvailable}
          onClick={() => void onClickHandler()}
        />
      </div>
    </div>
  );
}
