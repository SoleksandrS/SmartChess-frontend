import type { ActionCreator } from 'redux';
import type { IStoreAction } from 'models/index.ts';
import { SET_LOADING, SET_MM_LOADING } from './socket.constants.ts';

export const setSocketLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setMMLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_MM_LOADING,
  payload
});
