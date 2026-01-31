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
  static MY_GAMES = `${this.GAMES}/my`;
  static GAME = (id: string) => `${this.GAMES}/${id}`;
  static GAME_MOVE = (id: string) => `${this.GAME(id)}/move`;
  static GAME_ADVICE = (id: string) => `${this.GAME(id)}/advice`;

  // ==========================
  // Game analysis
  // ==========================
  static GAME_ANALYSIS = `/game-analysis`;
  static GAME_ANALYSIS_ONE = (id: string) => `${this.GAME_ANALYSIS}/${id}`;
}
