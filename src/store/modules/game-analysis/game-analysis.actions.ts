import type { ActionCreator } from 'redux';
import type { IStoreAction } from 'models/index.ts';
import type { IAdvancedResponse } from 'types/response.types';
import { SET_DATA, SET_LOADING, CLEAR_DATA } from './game-analysis.constants.ts';

export const setLoading: ActionCreator<IStoreAction> = (payload: boolean) => ({
  type: SET_LOADING,
  payload
});

export const setGameAnalysisData: ActionCreator<IStoreAction> = (
  payload: IAdvancedResponse<string>
) => ({ type: SET_DATA, payload });

export const clearGameAnalysisData: ActionCreator<IStoreAction> = () => ({ type: CLEAR_DATA });
