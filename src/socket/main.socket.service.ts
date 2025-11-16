import { Socket } from 'socket.io-client';
import { ESocketEvent } from './ESocketEvent';
import type { AppDispatch } from 'store';
import {
  clearSocketData,
  setMMLoading,
  setSocketLoading
} from 'store/modules/socket/socket.actions';
import { updateGameData } from 'store/modules/game/game.actions';
import { matchmakingDoneThunk } from 'store/modules/socket/socket.thunk';
import type { TMakeMoveBody } from 'store/modules/game/game.types';
import type { TMatchmakingDoneBody } from 'store/modules/socket/socket.types';

class MainSocketService {
  private static instance: MainSocketService;

  constructor(private readonly socket: Socket) {}

  static setInstance(socket: Socket) {
    MainSocketService.instance = new MainSocketService(socket);
    return this.getInstance();
  }
  static getInstance() {
    return MainSocketService.instance;
  }

  public initConnection(id: number, dispatch: AppDispatch) {
    if (!this.socket) return console.warn('[MainSocketService] Socket is not initialized');

    dispatch(setSocketLoading(true));

    const emitConnect = () => {
      this.socket.emit(ESocketEvent.MAIN_CONNECT, { id });
      console.log('[MainSocketService] Sent connect event with userId:', id);
    };

    if (this.socket.connected) emitConnect();
    else this.socket.once('connect', emitConnect);

    this.socket.on(ESocketEvent.MAIN_CONNECT, (data: boolean) => {
      console.log('[MainSocketService] Socket handshake:', data);
      if (data) dispatch(setSocketLoading(false));
    });

    this.socket.on(ESocketEvent.GAME_UPDATE, (data: TMakeMoveBody) => {
      console.log('[MainSocketService] Received game updates:', data);
      dispatch(updateGameData(data));
    });

    this.socket.on(ESocketEvent.MATCHMAKING_LEAVE, () => {
      console.log('[MainSocketService] Received leave matchmaking:');
      dispatch(setMMLoading(false));
    });

    this.socket.on(ESocketEvent.MATCHMAKING_DONE, (data: TMatchmakingDoneBody) => {
      console.log('[MainSocketService] Received done matchmaking:', data);
      dispatch(matchmakingDoneThunk(data));
    });
  }

  public joinToGame(gameId: string) {
    if (!this.socket || !this.socket.connected) throw new Error('Socket isn`t connected');
    this.socket.emit(ESocketEvent.GAME_JOIN, { gameId });
  }

  public joinToMatchmaking() {
    if (!this.socket || !this.socket.connected) throw new Error('Socket isn`t connected');
    this.socket.emit(ESocketEvent.MATCHMAKING_JOIN);
  }

  public leaveFromMatchmaking() {
    if (!this.socket || !this.socket.connected) throw new Error('Socket isn`t connected');
    this.socket.emit(ESocketEvent.MATCHMAKING_LEAVE);
  }

  public disconnect(dispatch: AppDispatch) {
    if (!this.socket) return;

    this.socket.off(ESocketEvent.MAIN_CONNECT);
    this.socket.off(ESocketEvent.GAME_UPDATE);
    this.socket.off(ESocketEvent.MATCHMAKING_LEAVE);
    this.socket.off(ESocketEvent.MATCHMAKING_DONE);
    dispatch(clearSocketData());

    console.log('[MainSocketService] All listeners are disconnected');
  }
}

export { MainSocketService };
