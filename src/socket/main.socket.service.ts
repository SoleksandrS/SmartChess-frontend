import { Socket } from 'socket.io-client';
import { ESocketEvent } from './ESocketEvent';
import type { AppDispatch } from 'store';
import { updateGameData } from 'store/modules/game/game.actions';
import type { TMakeMoveBody } from 'store/modules/game/game.types';

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

    const emitConnect = () => {
      this.socket.emit(ESocketEvent.MAIN_CONNECT, { id });
      console.log('[MainSocketService] Sent connect event with userId:', id);
    };

    if (this.socket.connected) emitConnect();
    else this.socket.once('connect', emitConnect);

    this.socket.on(ESocketEvent.UPDATE_GAME, (data: TMakeMoveBody) => {
      console.log('[MainSocketService] Received game updates:', data);
      dispatch(updateGameData(data));
    });
  }

  public disconnect() {
    if (!this.socket) return;

    this.socket.off(ESocketEvent.UPDATE_GAME);

    console.log('[MainSocketService] All listeners are disconnected');
  }
}

export { MainSocketService };
