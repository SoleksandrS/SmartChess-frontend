/* eslint-disable @typescript-eslint/no-unsafe-enum-comparison */

import { useEffect, useRef, useState } from 'react';
import type { Move } from 'chess.js';
import { EChessResult, EChessSide, EGameStatus, type ICurrentUser, type IGame } from 'models';
import { ChessBoard, type ChessBoardRef } from 'components/ChessBoard/ChessBoard';
import { ChessSidebarData } from 'components/ChessSidebarData/ChessSidebarData';
import { ChessSidebarHistory } from 'components/ChessSidebarHistory/ChessSidebarHistory';
import { ChessResultModal } from 'components/ChessResultModal/ChessResultModal';

import styles from './AdvancedChessBoard.module.scss';

interface IAdvancedChessBoardProps {
  user: ICurrentUser;
  game: IGame;
  onMove: (move: Move, fen: string) => void;
}

export function AdvancedChessBoard({ user, game, onMove }: IAdvancedChessBoardProps) {
  const [gameStatus, setGameStatus] = useState<EGameStatus>(EGameStatus.PLAYING);
  const [isResultOpened, setIsResultOpened] = useState(false);

  const boardRef = useRef<ChessBoardRef>(null);

  const updateGameStatus = (value: EGameStatus) => {
    setGameStatus(value);
    setIsResultOpened(true);
  };

  useEffect(() => {
    if (!game.fen || !boardRef.current) return;
    if (game.fen === boardRef.current.getBoardFen()) return;
    boardRef.current.updateBoard(game.fen);
  }, [game]);

  useEffect(() => {
    if (!game.result || !game.turn || !user.id) return;
    if (!Object.values(EChessResult).includes(game.result as EChessResult)) return;
    if (game.result === EChessResult.DRAW) return updateGameStatus(EGameStatus.DRAW);
    if (game.turn === EChessSide.WHITE && game.whitePlayerId === user.id)
      return updateGameStatus(EGameStatus.WIN);
    if (game.turn === EChessSide.BLACK && game.blackPlayerId === user.id)
      return updateGameStatus(EGameStatus.WIN);
    return updateGameStatus(EGameStatus.LOSE);
  }, [game, user.id]);

  return (
    <>
      <div className={styles['chess-board']}>
        <ChessSidebarData
          whitePlayer={game?.whitePlayer?.username || 'AI'}
          blackPlayer={game?.blackPlayer?.username || 'AI'}
          currentTurn={EChessSide.WHITE}
          moveCount={0}
          status={gameStatus}
        />
        <ChessBoard ref={boardRef} initFen={game.fen} onMove={onMove} />
        <ChessSidebarHistory
          moves={game.moves.map(({ moveNumber, turn, ...rest }) => ({
            ...rest,
            side: turn,
            number: moveNumber
          }))}
        />
      </div>
      {isResultOpened && (
        <ChessResultModal result={gameStatus} onClose={() => setIsResultOpened(false)} />
      )}
    </>
  );
}
