import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, TState } from 'store';
import type { Move } from 'chess.js';
import { getGameDataThunk, makeGameMoveThunk } from 'store/modules/game/game.thunk';
import { clearGameData } from 'store/modules/game/game.actions';
import { AdvancedChessBoard, MainLoader, NotFoundGame } from 'components';
import { MainSocketService } from 'socket/main.socket.service';

import styles from './Game.module.scss';

export function Game() {
  const userData = useSelector((state: TState) => state.auth.data);
  const game = useSelector((state: TState) => state.game.data);
  const loading = useSelector((state: TState) => state.game.loading);
  const dispatch: AppDispatch = useDispatch();
  const { id } = useParams();

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
    if (!game?.id) return;
    const service = MainSocketService.getInstance();
    service.joinToGame(game.id);
  }, [game?.id]);

  return (
    <div className={styles['page']}>
      <h1 className={styles['title']}>Play vs AI</h1>
      {userData && game ? (
        <AdvancedChessBoard user={userData} game={game} onMove={onMoveHandler} />
      ) : (
        <NotFoundGame />
      )}
      {loading && <MainLoader />}
    </div>
  );
}
