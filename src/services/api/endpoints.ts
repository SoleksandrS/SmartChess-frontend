export class ENDPOINTS {
  static GAMES = `/games`;

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
}
