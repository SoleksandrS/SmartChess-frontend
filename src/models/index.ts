/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IStoreAction {
  type: string;
  payload?: any;
}

export interface ICurrentUser {
  id: number;
  username: string;
  email: string;
}

export interface IGame {
  id: string;
  fen: string;
  turn: string;
  result: string;
  whitePlayerId?: number;
  blackPlayerId?: number;
  whitePlayer?: { username: string };
  blackPlayer?: { username: string };
}

export enum EChessResult {
  DRAW = 'draw',
  CHECKMATE = 'checkmate'
}
