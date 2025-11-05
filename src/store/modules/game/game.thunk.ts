import { ENDPOINTS, api } from 'services/api';
import type { AppDispatch } from 'store';
import type { IGame } from 'models';
import { catchErrorWithToastr } from 'utils/catchErrorWithToastr';
import type { TMakeMoveBody } from './game.types';
import { setLoading, setGameData, updateGameData } from './game.actions';

export const getGameDataThunk = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await api.get<IGame>(ENDPOINTS.GAME(id));
    dispatch(setGameData(data));
  } catch (err) {
    catchErrorWithToastr(err);
    dispatch(setLoading(false));
  }
};

export const makeGameMoveThunk =
  (id: string, move: string, fen: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
      await api.put<TMakeMoveBody>(ENDPOINTS.GAME_MOVE(id), { move });
    } catch (err) {
      catchErrorWithToastr(err);
      dispatch(updateGameData({ values: { fen }, moves: [] }));
    } finally {
      dispatch(setLoading(false));
    }
  };
