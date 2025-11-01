import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import type { Move } from 'chess.js';
import { getGameDataThunk, makeGameMoveThunk } from 'store/modules/game/game.thunk';
import { clearGameData } from 'store/modules/game/game.actions';
import {
  ChessBoard,
  type ChessBoardRef,
  GameResultModal,
  GameSidebarData,
  MainLoader,
  type TGameResultModalValue
} from 'components';
import { EChessResult } from 'models';

import styles from './GameVsAI.module.scss';

export function GameVsAI() {
  const userData = useSelector((state: TState) => state.auth.data);
  const game = useSelector((state: TState) => state.game.data);
  const loading = useSelector((state: TState) => state.game.loading);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const [gameResult, setGameResult] = useState<TGameResultModalValue>('draw');
  const [isResultOpened, setIsResultOpened] = useState(false);

  const boardRef = useRef<ChessBoardRef>(null);

  const onMoveHandler = (move: Move, fen: string) => {
    if (game) void dispatch(makeGameMoveThunk(game.id, move.lan, fen));
  };

  const updateGameResult = (value: TGameResultModalValue) => {
    setGameResult(value);
    setIsResultOpened(true);
  };

  useEffect(() => {
    if (id) void dispatch(getGameDataThunk(id));
    return () => {
      dispatch(clearGameData());
    };
  }, [dispatch, id]);

  useEffect(() => {
    if (!game?.fen || !boardRef.current) return;
    if (game.fen === boardRef.current.getBoardFen()) return;
    boardRef.current.updateBoard(game.fen);
  }, [game]);

  useEffect(() => {
    if (!game?.result || !game.turn || !userData?.id) return;
    if (!Object.values(EChessResult).includes(game.result as EChessResult)) return;
    if (game.result === EChessResult.DRAW) return updateGameResult('draw');
    if (game.turn === 'w' && game.whitePlayerId === userData.id) return updateGameResult('win');
    if (game.turn === 'b' && game.blackPlayerId === userData.id) return updateGameResult('win');
    return updateGameResult('lose');
  }, [game]);

  return (
    <div className={styles['page']}>
      <h1 className={styles['title']}>Play vs AI</h1>
      {game && (
        <div className={styles['chess-board']}>
          <GameSidebarData
            whitePlayer={game?.whitePlayer?.username || 'AI'}
            blackPlayer={game?.blackPlayer?.username || 'AI'}
            currentTurn={'w'}
            moveCount={0}
            status={'playing'}
          />
          <ChessBoard ref={boardRef} initFen={game.fen} onMove={onMoveHandler} />
        </div>
      )}
      {isResultOpened && (
        <GameResultModal result={gameResult} onClose={() => setIsResultOpened(false)} />
      )}
      {loading && <MainLoader />}
    </div>
  );
}
