import { ENDPOINTS, api } from 'services/api';
import type { AppDispatch } from 'store';
import type { IGame } from 'models';
import { setLoading, setGameData, updateGameData } from './game.actions';

export const getGameDataThunk = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await api.get<IGame>(ENDPOINTS.GAME(id));
    dispatch(setGameData(data));
  } catch (err) {
    console.error(err);
    dispatch(setLoading(false));
  }
};

export const makeGameMoveThunk =
  (id: string, move: string, fen: string) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
      const { data } = await api.put<Partial<IGame>>(ENDPOINTS.GAME_MOVE(id), { move });
      dispatch(updateGameData(data));
    } catch (err) {
      console.error(err);
      dispatch(updateGameData({ fen }));
    }
  };
