import { Telegram } from "puregram";
import { Env } from "../types/env";
import { Logger } from "../types/logger";
import env from "../env";

namespace LoggerManager {
  /**
   * Emojis corresponding to different log types.
   */
  const emojies: Record<keyof Logger, string> = {
    log: "✉️ ",
    info: "ℹ️ ",
    warn: "⚠️ ",
    error: "❌ ",
  };

  /**
   * Prefixes corresponding to different log types for colored console output.
   */
  const prefixes: Record<keyof Logger, string> = {
    log: `\x1b[34m[LOG]\x1b[0m `,
    info: `\x1b[32m[INF]\x1b[0m `,
    warn: `\x1b[33m[WRN]\x1b[0m `,
    error: `\x1b[31m[ERR]\x1b[0m `,
  };

  /**
   *
   */
  const tg = Telegram.fromToken(env.logger.token);

  /**
   *
   */
  const adminId = env.logger.adminId;

  export const createLogger = (
    getLoggingMethod: (method: keyof Logger) => (...data: any[]) => void
  ): Logger => {
    const Log: Logger = Object.assign((...data: any[]) => Log.log(data), {
      log: getLoggingMethod("log"),
      info: getLoggingMethod("info"),
      warn: getLoggingMethod("warn"),
      error: getLoggingMethod("error"),
    });

    return Log;
  };

  export const logToTg = createLogger((method: keyof Logger) => {
    return (...data: any[]) => {
      tg.api.sendMessage({
        chat_id: adminId,
        text: emojies[method] + data.join(" "),
      });

      console[method](prefixes[method] + data.join(" "));
    };
  });

  export const createProgressBar = (title: string, totalSteps: number) => {
    const tg = Telegram.fromToken(env.logger.token);
    const adminId = env.logger.adminId;

    const logs: Array<string> = [];

    const LogProgressBar = (method: keyof Logger) => {
      return (...data: any[]) => {
        logs.push(
          emojies[method] + `${logs.length}/${totalSteps} ` + data.join(" ")
        );
        console[method](
          prefixes[method] + `${logs.length}/${totalSteps} ` + data.join(" ")
        );

        if (logs.length === totalSteps || method == "error") {
          tg.api.sendMessage({
            chat_id: adminId,
            text: `${title} progress: \n\n` + logs.join("\n\n"),
          });
        }
      };
    };

    return createLogger(LogProgressBar);
  };
}

export default LoggerManager;
export const logToTg = LoggerManager.logToTg;
