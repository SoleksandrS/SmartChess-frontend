import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import type { Move } from 'chess.js';
import { getGameDataThunk, makeGameMoveThunk } from 'store/modules/game/game.thunk';
import { clearGameData } from 'store/modules/game/game.actions';
import ChessBoard, { type ChessBoardRef } from 'components/ChessBoard/ChessBoard';
import { GameResultModal } from 'components/GameResultModal/GameResultModal';
import { MainLoader } from 'components';

import styles from './GameVsAI.module.scss';

export function GameVsAI() {
  const game = useSelector((state: TState) => state.game.data);
  const loading = useSelector((state: TState) => state.game.loading);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const boardRef = useRef<ChessBoardRef>(null);

  const onMoveHandler = (move: Move, fen: string) => {
    if (game) void dispatch(makeGameMoveThunk(game.id, move.lan, fen));
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

  return (
    <div className={styles['page']}>
      <h1 className={styles['title']}>Play vs AI</h1>
      {game && <ChessBoard ref={boardRef} initFen={game.fen} onMove={onMoveHandler} />}
      <GameResultModal result="draw" onClose={() => console.log('exa')} />
      {loading && <MainLoader />}
    </div>
  );
}
