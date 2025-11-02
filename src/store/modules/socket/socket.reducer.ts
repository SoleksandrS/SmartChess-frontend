import { SET_LOADING } from './socket.constants.ts';
import type { IStoreAction } from 'models/index.ts';

interface IInitialState {
  loading: boolean;
}

export const initialState: IInitialState = {
  loading: false
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, loading: payload };
    }

    default: {
      return state;
    }
  }
};
