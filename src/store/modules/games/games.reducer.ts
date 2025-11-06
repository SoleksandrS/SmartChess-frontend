import { SET_DATA, SET_LOADING, CLEAR_DATA } from './games.constants.ts';
import type { ISimpleGame, IStoreAction } from 'models/index.ts';

interface IInitialState {
  loading: boolean;
  data: ISimpleGame[];
}

export const initialState: IInitialState = {
  loading: false,
  data: []
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, loading: payload };
    }

    case SET_DATA: {
      const payload = action.payload as ISimpleGame[];
      return { ...state, loading: false, data: payload };
    }

    case CLEAR_DATA: {
      return { ...state, loading: false, data: null };
    }

    default: {
      return state;
    }
  }
};
