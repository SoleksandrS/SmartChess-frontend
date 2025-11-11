import type { ActionCreator } from 'redux';
import type { ISimpleGame, IStoreAction } from 'models/index.ts';
import type { IAdvancedResponse } from 'types/response.types';
import { SET_DATA, SET_LOADING, CLEAR_DATA } from './games.constants.ts';

export const setLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setGamesData: ActionCreator<IStoreAction> = (
  payload: IAdvancedResponse<ISimpleGame[]>
) => ({
  type: SET_DATA,
  payload
});

export const clearGamesData: ActionCreator<IStoreAction> = () => ({ type: CLEAR_DATA });
