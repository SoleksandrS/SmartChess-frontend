import type { ActionCreator } from 'redux';
import type { IStoreAction } from 'models/index.ts';
import { CLEAR_DATA, SET_LOADING, SET_MM_LOADING } from './socket.constants.ts';

export const setSocketLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setMMLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_MM_LOADING,
  payload
});

export const clearSocketData: ActionCreator<IStoreAction> = () => ({ type: CLEAR_DATA });
