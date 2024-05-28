import env from "@/env";
import { Telegram } from "puregram";
import { TelegramBotCommand } from "puregram/generated";

/**
 * TO-DO
 * @param telegram
 */
export const setHints = (telegram: Telegram): Promise<true> => {
  return telegram.api.setMyCommands({
    commands: env.bot.hints,
    scope: { type: "default" },
  });
};
