import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import type { TState } from 'store';
import { EChessResult, EChessSide, type ISimpleGame } from 'models';
import { ROUTES } from 'constants/routes';

import styles from './GameItem.module.scss';

interface IProps {
  game: ISimpleGame;
}

export function GameItem({ game }: IProps) {
  const userData = useSelector((state: TState) => state.auth.data);
  const navigate = useNavigate();

  const white = useMemo(() => game.whitePlayer?.username ?? 'AI', [game.whitePlayer]);
  const black = useMemo(() => game.blackPlayer?.username ?? 'AI', [game.blackPlayer]);

  const result = useMemo(() => {
    if (!userData) return 'Unknown';
    if (!game.result) return 'In progress';
    if (game.result === EChessResult.DRAW) return 'Draw';

    const isWhiteWinner = game.result === EChessResult.CHECKMATE && game.turn === EChessSide.WHITE;
    const isBlackWinner = game.result === EChessResult.CHECKMATE && game.turn === EChessSide.BLACK;
    if (
      (isWhiteWinner && game.whitePlayerId === userData.id) ||
      (isBlackWinner && game.blackPlayerId === userData.id)
    )
      return 'Victory';
    if (
      (isWhiteWinner && game.blackPlayerId === userData.id) ||
      (isBlackWinner && game.whitePlayerId === userData.id)
    )
      return 'Defeat';

    return 'Unknown';
  }, [game.blackPlayerId, game.result, game.turn, game.whitePlayerId, userData]);

  return (
    <div
      key={game.id}
      className={styles['game-row']}
      onClick={() => void navigate(`${ROUTES.GAMES}/${game.id}`)}>
      <div className={styles['players']}>
        <span className={styles['player']}>{white}</span>
        <span className={styles['vs']}>vs</span>
        <span className={styles['player']}>{black}</span>
      </div>
      <div className={styles['info']}>
        <span className={styles['moves']}>Moves: {game.moveNumber}</span>
        <span className={styles['turn']}>
          Turn: {game.turn === EChessSide.WHITE ? 'White' : 'Black'}
        </span>
      </div>
      <div className={styles['result']}>{result}</div>
      <div className={styles['date']}>{new Date(game.createdAt).toLocaleDateString()}</div>
    </div>
  );
}
