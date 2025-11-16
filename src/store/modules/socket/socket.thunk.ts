import type { AppDispatch } from 'store';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigation';
import { catchErrorWithToastr } from 'utils/catchErrorWithToastr';
import { MainSocketService } from 'socket/main.socket.service';
import type { TMatchmakingDoneBody } from './socket.types';
import { setMMLoading } from './socket.actions';

export const matchmakingJoinThunk = () => (dispatch: AppDispatch) => {
  try {
    const service = MainSocketService.getInstance();
    service.joinToMatchmaking();
    dispatch(setMMLoading(true));
  } catch (err) {
    catchErrorWithToastr(err);
  }
};

export const matchmakingLeaveThunk = () => (dispatch: AppDispatch) => {
  try {
    const service = MainSocketService.getInstance();
    service.leaveFromMatchmaking();
    dispatch(setMMLoading(false));
  } catch (err) {
    catchErrorWithToastr(err);
  }
};

export const matchmakingDoneThunk = (body: TMatchmakingDoneBody) => (dispatch: AppDispatch) => {
  try {
    void navigate(`${ROUTES.GAMES}/${body.gameId}`);
    dispatch(setMMLoading(false));
  } catch (err) {
    catchErrorWithToastr(err);
  }
};
