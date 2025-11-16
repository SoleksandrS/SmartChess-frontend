export enum ESocketEvent {
  CONNECT = 'connect',
  DISCONNECT = 'disconnect',
  CONNECT_ERROR = 'connect_error',
  MAIN_CONNECT = 'main-connect',
  GAME_JOIN = 'game:join',
  GAME_UPDATE = 'game:update',
  MATCHMAKING_JOIN = 'matchmaking:join',
  MATCHMAKING_LEAVE = 'matchmaking:leave',
  MATCHMAKING_DONE = 'matchmaking:done'
}
