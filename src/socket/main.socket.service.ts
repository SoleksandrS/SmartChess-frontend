import { Socket } from 'socket.io-client';
import { ESocketEvent } from './ESocketEvent';
import type { AppDispatch } from 'store';

class MainSocketService {
  constructor(private readonly socket: Socket) {}

  public initConnection(id: number, dispatch: AppDispatch) {
    if (!this.socket) return console.warn('[MainSocketService] Socket is not initialized');

    const emitConnect = () => {
      console.log('ESocketEvent.MAIN_CONNECT', ESocketEvent.MAIN_CONNECT);
      this.socket.emit(ESocketEvent.MAIN_CONNECT, { id });
      console.log('[MainSocketService] Sent connect event with userId:', id);
    };

    if (this.socket.connected) emitConnect();
    else this.socket.once('connect', emitConnect);
  }

  public disconnect() {
    if (!this.socket) return;

    console.log('[MainSocketService] All listeners are disconnected');
  }
}

export { MainSocketService };
