import type { ActionCreator } from 'redux';
import type { ICurrentUser, IStoreAction } from 'models/index.ts';
import { SET_USER_DATA, SET_LOADING } from './auth.constants.ts';

export const setLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setUserData: ActionCreator<IStoreAction> = (payload: ICurrentUser) => ({
  type: SET_USER_DATA,
  payload
});
