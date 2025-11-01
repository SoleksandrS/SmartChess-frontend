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

export enum EChessSide {
  WHITE = 'w',
  BLACK = 'b'
}

export enum EChessResult {
  DRAW = 'draw',
  CHECKMATE = 'checkmate'
}

export interface IGame {
  id: string;
  fen: string;
  turn: EChessSide;
  result: EChessResult | null;
  whitePlayerId?: number;
  blackPlayerId?: number;
  whitePlayer?: { username: string };
  blackPlayer?: { username: string };
  moves: {
    moveNumber: number;
    turn: EChessSide;
    move: string;
  }[];
}

export enum EGameStatus {
  WIN = 'win',
  LOSE = 'lose',
  DRAW = 'draw',
  PLAYING = 'playing'
}
