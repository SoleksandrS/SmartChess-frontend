import type { AppDispatch } from 'store';
import { ROUTES } from 'constants/routes';
import { navigate } from 'utils/navigation';
import { catchErrorWithToastr } from 'utils/catchErrorWithToastr';
import { MainSocketService } from 'socket/main.socket.service';
import type { TMatchmakingDoneBody } from './socket.types';
import { setMMLoading } from './socket.actions';

export const matchmakingJoinThunk = (id: number) => (dispatch: AppDispatch) => {
  try {
    const service = MainSocketService.getInstance();
    service.joinToMatchmaking(id);
    dispatch(setMMLoading(true));
  } catch (err) {
    catchErrorWithToastr(err);
  }
};

export const matchmakingLeaveThunk = (id: number) => (dispatch: AppDispatch) => {
  try {
    const service = MainSocketService.getInstance();
    service.leaveFromMatchmaking(id);
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
