export class ENDPOINTS {
  // ==========================
  // Auth
  // ==========================
  static AUTH = `/auth`;
  static SIGN_IN = `${this.AUTH}/sign-in`;
  static SIGN_UP = `${this.AUTH}/sign-up`;

  // ==========================
  // Users
  // ==========================
  static USERS = `/users`;
  static CURRENT_USER = `${this.USERS}/current`;

  // ==========================
  // Games
  // ==========================
  static GAMES = `/games`;
  static GAME = (id: string) => `${this.GAMES}/${id}`;
  static GAME_MOVE = (id: string) => `${this.GAME(id)}/move`;
}
