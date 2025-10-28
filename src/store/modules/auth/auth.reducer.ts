import { SET_USER_DATA, SET_LOADING, SET_APP_LOADING } from './auth.constants.ts';
import type { ICurrentUser, IStoreAction } from 'models/index.ts';

interface IInitialState {
  appLoading: boolean;
  loading: boolean;
  data: ICurrentUser | null;
}

export const initialState: IInitialState = {
  appLoading: false,
  loading: false,
  data: null
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_APP_LOADING:
      return { ...state, appLoading: action.payload as boolean };

    case SET_LOADING:
      return { ...state, loading: action.payload as boolean };

    case SET_USER_DATA:
      return { ...state, appLoading: false, data: action.payload as ICurrentUser };

    default:
      return state;
  }
};
