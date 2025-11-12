import type { IGame, IGameMove } from 'models';

export type TMakeMoveBody = { values: Partial<IGame>; move: IGameMove };
