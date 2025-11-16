import { CLEAR_DATA, SET_LOADING, SET_MM_LOADING } from './socket.constants.ts';
import type { IStoreAction } from 'models/index.ts';

interface IInitialState {
  loading: boolean;
  matchmakingLoading: boolean;
}

export const initialState: IInitialState = {
  loading: false,
  matchmakingLoading: false
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, loading: payload };
    }

    case SET_MM_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, matchmakingLoading: payload };
    }

    case CLEAR_DATA: {
      return { ...initialState };
    }

    default: {
      return state;
    }
  }
};
