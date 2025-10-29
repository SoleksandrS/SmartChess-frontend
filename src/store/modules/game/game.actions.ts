import type { ActionCreator } from 'redux';
import type { IGame, IStoreAction } from 'models/index.ts';
import { SET_DATA, SET_LOADING, CLEAR_DATA } from './game.constants.ts';

export const setLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setGameData: ActionCreator<IStoreAction> = (payload: IGame) => ({
  type: SET_DATA,
  payload
});

export const clearGameData: ActionCreator<IStoreAction> = () => ({ type: CLEAR_DATA });
