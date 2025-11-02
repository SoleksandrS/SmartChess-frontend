import { io, Socket } from 'socket.io-client';
import { envs } from '../config';
import { ESocketEvent } from './ESocketEvent';

class SocketService {
  private socket!: Socket;

  private handleConnection() {
    this.socket.on(ESocketEvent.CONNECT, () => {
      console.log('Connected to WS server');
    });
  }

  private handleError() {
    this.socket.on(ESocketEvent.CONNECT_ERROR, () => {
      console.log('Failed connection to WS server');
    });
  }

  public connect(): void {
    if (!this.socket) {
      this.socket = io(envs.socketUrl, { path: '/socket.io', transports: ['websocket'] });
      this.handleConnection();
      this.handleError();
    }
  }

  public reconnect(): void {
    this.socket = io(envs.socketUrl, { path: '/socket.io', transports: ['websocket'] });
  }

  public getSocket(): Socket {
    return this.socket;
  }
}

export { SocketService };
