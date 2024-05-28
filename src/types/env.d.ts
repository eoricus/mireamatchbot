/**
 *
 */
export interface Env {
  /**
   *
   */
  databaseURL: string | undefined;
  /**
   *
   */
  bot: {
    hints: Array<TelegramBotCommand>;
    token: string;
    messageMode: string;
  };
  /**
   *
   */
  logger: {
    token: string;
    adminId: string;
  };
}
