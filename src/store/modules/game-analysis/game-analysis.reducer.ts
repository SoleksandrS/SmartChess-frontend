import type { IStoreAction } from 'models/index.ts';
import { SET_DATA, SET_LOADING, CLEAR_DATA } from './game-analysis.constants.ts';

interface IInitialState {
  loading: boolean;
  data: string | null;
}

export const initialState: IInitialState = {
  loading: false,
  data: null
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, loading: payload };
    }

    case SET_DATA: {
      const payload = action.payload as string;
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
