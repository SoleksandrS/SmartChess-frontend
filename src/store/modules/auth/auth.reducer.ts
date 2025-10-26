import { SET_USER_DATA, SET_LOADING } from './auth.constants.ts';
import type { IStoreAction } from 'models/index.ts';

interface IInitialState {
  loading: boolean;
  data: unknown;
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
      return { ...state, loading: false, data: action.payload as object };

    default:
      return state;
  }
};
