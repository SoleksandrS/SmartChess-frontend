/* eslint-disable @typescript-eslint/no-explicit-any */

export interface IStoreAction {
  type: string;
  payload?: any;
}

export interface ICurrentUser {
  username: string;
  email: string;
}

export interface IGame {
  id: string;
  fen: string;
  turn: string;
  result: string;
  whitePlayer?: { username: string };
  blackPlayer?: { username: string };
}
