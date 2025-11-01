/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useEffect, useRef, useState } from 'react';
import type { Move } from 'chess.js';
import { EChessResult, type ICurrentUser, type IGame } from 'models';
import { ChessBoard, type ChessBoardRef } from 'components/ChessBoard/ChessBoard';
import { ChessSidebarData } from 'components/ChessSidebarData/ChessSidebarData';
import { ChessSidebarHistory } from 'components/ChessSidebarHistory/ChessSidebarHistory';
import {
  ChessResultModal,
  type TChessResultModalValue
} from 'components/ChessResultModal/ChessResultModal';

import styles from './AdvancedChessBoard.module.scss';

interface IAdvancedChessBoardProps {
  user: ICurrentUser;
  game: IGame;
  onMove: (move: Move, fen: string) => void;
}

export function AdvancedChessBoard({ user, game, onMove }: IAdvancedChessBoardProps) {
  const [gameResult, setGameResult] = useState<TChessResultModalValue>('draw');
  const [isResultOpened, setIsResultOpened] = useState(false);

  const boardRef = useRef<ChessBoardRef>(null);

  const updateGameResult = (value: TChessResultModalValue) => {
    setGameResult(value);
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
    if (game.result === EChessResult.DRAW) return updateGameResult('draw');
    if (game.turn === 'w' && game.whitePlayerId === user.id) return updateGameResult('win');
    if (game.turn === 'b' && game.blackPlayerId === user.id) return updateGameResult('win');
    return updateGameResult('lose');
  }, [game, user.id]);

  return (
    <>
      <div className={styles['chess-board']}>
        <ChessSidebarData
          whitePlayer={game?.whitePlayer?.username || 'AI'}
          blackPlayer={game?.blackPlayer?.username || 'AI'}
          currentTurn={'w'}
          moveCount={0}
          status={'playing'}
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
        <ChessResultModal result={gameResult} onClose={() => setIsResultOpened(false)} />
      )}
    </>
  );
}
