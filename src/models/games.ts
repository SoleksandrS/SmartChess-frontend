export enum EChessSide {
  WHITE = 'w',
  BLACK = 'b'
}

export enum EChessResult {
  DRAW = 'draw',
  CHECKMATE = 'checkmate'
}

export type ISimpleGame = Pick<
  IGame,
  | 'id'
  | 'moveNumber'
  | 'turn'
  | 'result'
  | 'whitePlayerId'
  | 'blackPlayerId'
  | 'whitePlayer'
  | 'blackPlayer'
  | 'createdAt'
>;

export interface IGame {
  id: string;
  fen: string;
  moveNumber: number;
  turn: EChessSide;
  result: EChessResult | null;
  whitePlayerId?: number;
  blackPlayerId?: number;
  whitePlayer?: { username: string };
  blackPlayer?: { username: string };
  moves: IGameMove[];
  createdAt: Date;
}

export interface IGameMove {
  number: number;
  side: EChessSide;
  move: string;
  fenAfter?: string;
}

export enum EGameStatus {
  WIN = 'win',
  LOSE = 'lose',
  DRAW = 'draw',
  PLAYING = 'playing'
}
