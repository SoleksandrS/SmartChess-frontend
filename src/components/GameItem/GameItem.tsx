import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { EChessResult, EChessSide, type ISimpleGame } from 'models';
import { ROUTES } from 'constants/routes';

import styles from './GameItem.module.scss';

interface IProps {
  game: ISimpleGame;
}

export function GameItem({ game }: IProps) {
  const navigate = useNavigate();

  const white = useMemo(() => game.whitePlayer?.username ?? 'AI', [game.whitePlayer]);
  const black = useMemo(() => game.blackPlayer?.username ?? 'AI', [game.blackPlayer]);

  const result = useMemo(() => {
    return game.result === EChessResult.CHECKMATE && game.turn === EChessSide.WHITE
      ? 'White wins'
      : game.result === EChessResult.CHECKMATE && game.turn === EChessSide.BLACK
        ? 'Black wins'
        : game.result === EChessResult.DRAW
          ? 'Draw'
          : 'In progress';
  }, [game.result, game.turn]);

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
