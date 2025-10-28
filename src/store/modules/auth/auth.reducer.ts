import { SET_USER_DATA, SET_LOADING, CLEAR_DATA } from './auth.constants.ts';
import type { ICurrentUser, IStoreAction } from 'models/index.ts';

interface IInitialState {
  loading: boolean;
  data: ICurrentUser | null;
}

export const initialState: IInitialState = {
  loading: false,
  data: null
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload as boolean };

    case SET_USER_DATA:
      return { ...state, loading: false, data: action.payload as ICurrentUser };

    case CLEAR_DATA:
      return { ...state, loading: false, data: null };

    default:
      return state;
  }
};
