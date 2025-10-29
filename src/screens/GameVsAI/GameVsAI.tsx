import { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import type { Move } from 'chess.js';
import { getGameDataThunk } from 'store/modules/game/game.thunk';
import { clearGameData } from 'store/modules/game/game.actions';
import ChessBoard, { type ChessBoardRef } from 'components/ChessBoard/ChessBoard';
import { MainLoader } from 'components';

import styles from './GameVsAI.module.scss';

export function GameVsAI() {
  const game = useSelector((state: TState) => state.game.data);
  const loading = useSelector((state: TState) => state.game.loading);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

  const boardRef = useRef<ChessBoardRef>(null);

  const onMoveHandler = (move: Move, fen: string) => {
    console.log('move', move);
    console.log('fen', fen);
  };

  const onGameOverHandler = (status: string) => {
    console.log('status', status);
  };

  useEffect(() => {
    if (id) void dispatch(getGameDataThunk(id));
    return () => {
      dispatch(clearGameData());
    };
  }, [dispatch, id]);

  return (
    <div className={styles['page']}>
      <h1 className={styles['title']}>Play vs AI</h1>
      {game && (
        <ChessBoard
          ref={boardRef}
          initFen={game.fen}
          onMove={onMoveHandler}
          onGameOver={onGameOverHandler}
        />
      )}
      {loading && <MainLoader />}
    </div>
  );
}
