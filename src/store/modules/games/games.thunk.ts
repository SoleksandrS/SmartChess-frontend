import { ENDPOINTS, api } from 'services/api';
import type { AppDispatch } from 'store';
import type { ISimpleGame } from 'models';
import { catchErrorWithToastr } from 'utils/catchErrorWithToastr';
import { setLoading, setGamesData } from './games.actions';

export const getMyGamesDataThunk = () => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await api.get<ISimpleGame[]>(ENDPOINTS.MY_GAMES);
    dispatch(setGamesData(data));
  } catch (err) {
    catchErrorWithToastr(err);
    dispatch(setLoading(false));
  }
};

export const createGameVsAIThunk =
  (userId: number, callback: (id: string) => void) => async (dispatch: AppDispatch) => {
    dispatch(setLoading(true));

    try {
      const { data } = await api.post<ISimpleGame>(ENDPOINTS.GAMES, { whitePlayerId: userId });
      callback(data.id);
    } catch (err) {
      catchErrorWithToastr(err);
    } finally {
      dispatch(setLoading(false));
    }
  };
