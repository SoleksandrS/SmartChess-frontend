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
