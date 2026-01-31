import { configureStore, combineReducers } from '@reduxjs/toolkit';

import socket from './modules/socket/socket.reducer';
import auth from './modules/auth/auth.reducer';
import game from './modules/game/game.reducer';
import gameAnalysis from './modules/game-analysis/game-analysis.reducer';
import games from './modules/games/games.reducer';

const rootReducer = combineReducers({ socket, auth, game, gameAnalysis, games });

export const store = configureStore({ reducer: rootReducer });

export type TState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
