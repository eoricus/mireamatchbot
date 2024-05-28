import { HearManager } from "@puregram/hear";
import { InlineKeyboard, Keyboard, MessageContext, Telegram } from "puregram";
import { prompts } from "@/utils/prompts";
import payloadStart from "./payloads/payloadStart";

export const setMessageListener = (telegram: Telegram): void => {
  const manager = new HearManager<MessageContext>();

  manager.hear("/start", (ctx: MessageContext) => {
    ctx.reply(prompts.start.before, {
      reply_markup: InlineKeyboard.keyboard([
        InlineKeyboard.textButton({
          text: "Готов ❤️‍🔥",
          payload: payloadStart.pack({
            isReady: true,
          }),
        }),
      ]),
      // TO-DO: вывести это в постобработку сообщений
      parse_mode: "MarkdownV2",
    });
  });

  telegram.updates.on("message", manager.middleware);
};
