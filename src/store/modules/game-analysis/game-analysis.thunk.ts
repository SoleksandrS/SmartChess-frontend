import { ENDPOINTS, api } from 'services/api';
import type { AppDispatch } from 'store';
import type { ISimpleGame } from 'models';
import type { IAdvancedResponse } from 'types/response.types';
import { catchErrorWithToastr } from 'utils/catchErrorWithToastr';
import { setLoading, setGameAnalysisData } from './game-analysis.actions';

export const getGameAnalysisDataThunk = (id: string) => async (dispatch: AppDispatch) => {
  dispatch(setLoading(true));

  try {
    const { data } = await api.get<IAdvancedResponse<ISimpleGame[]>>(
      ENDPOINTS.GAME_ANALYSIS_ONE(id)
    );
    dispatch(setGameAnalysisData(data));
  } catch (err) {
    catchErrorWithToastr(err);
    dispatch(setLoading(false));
  }
};
