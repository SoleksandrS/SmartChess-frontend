import { configureStore, combineReducers } from '@reduxjs/toolkit';

import auth from './modules/auth/auth.reducer';

const rootReducer = combineReducers({ auth });

export const store = configureStore({ reducer: rootReducer });

export type TState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
