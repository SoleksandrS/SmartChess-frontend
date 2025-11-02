import { SET_DATA, SET_LOADING, CLEAR_DATA, UPDATE_DATA } from './game.constants.ts';
import type { IGame, IStoreAction } from 'models/index.ts';
import type { TMakeMoveBody } from './game.types.ts';

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
    case SET_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, loading: payload };
    }

    case SET_DATA: {
      const payload = action.payload as IGame;
      return { ...state, loading: false, data: payload };
    }

    case UPDATE_DATA: {
      const payload = action.payload as TMakeMoveBody;
      return {
        ...state,
        loading: false,
        data: state.data
          ? { ...state.data, ...payload.values, moves: [...state.data.moves, ...payload.moves] }
          : null
      };
    }

    case CLEAR_DATA: {
      return { ...state, loading: false, data: null };
    }

    default: {
      return state;
    }
  }
};
