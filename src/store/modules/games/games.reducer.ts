import type { ISimpleGame, IStoreAction } from 'models/index.ts';
import type { IAdvancedResponse, IResponseMeta } from 'types/response.types.ts';
import { SET_DATA, SET_LOADING, CLEAR_DATA } from './games.constants.ts';

interface IInitialState {
  loading: boolean;
  data: ISimpleGame[];
  meta: IResponseMeta | null;
}

export const initialState: IInitialState = {
  loading: false,
  data: [],
  meta: null
};

export default (state = { ...initialState }, action: IStoreAction) => {
  switch (action.type) {
    case SET_LOADING: {
      const payload = action.payload as boolean;
      return { ...state, loading: payload };
    }

    case SET_DATA: {
      const payload = action.payload as IAdvancedResponse<ISimpleGame[]>;
      return { ...state, loading: false, ...payload };
    }

    case CLEAR_DATA: {
      return { ...state, loading: false, data: null };
    }

    default: {
      return state;
    }
  }
};
