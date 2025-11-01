import { SET_DATA, SET_LOADING, CLEAR_DATA, UPDATE_DATA } from './game.constants.ts';
import type { IGame, IStoreAction } from 'models/index.ts';

interface IInitialState {
  loading: boolean;
  data: IGame | null;
}

export const initialState: IInitialState = {
  loading: false,
  data: null
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: action.payload as boolean };

    case SET_DATA:
      return { ...state, loading: false, data: action.payload as IGame };

    case UPDATE_DATA:
      return {
        ...state,
        loading: false,
        data: state.data ? ({ ...state.data, ...action.payload } as IGame) : null
      };

    case CLEAR_DATA:
      return { ...state, loading: false, data: null };

    default:
      return state;
  }
};
