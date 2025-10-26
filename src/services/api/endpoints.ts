export class ENDPOINTS {
  static USERS = `/users`;
  static GAMES = `/games`;

  // ==========================
  // Auth
  // ==========================
  static AUTH = `/auth`;
  static SIGN_IN = `${this.AUTH}/sign-in`;
  static SIGN_UP = `${this.AUTH}/sign-up`;
}
