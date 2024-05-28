import db from "@/database";
import { logToTg } from "@/logger";
import { prompts } from "@/utils/prompts";
import { CallbackDataBuilder } from "@puregram/callback-data";
import { InlineKeyboard } from "puregram";
import payloadStep1 from "./payloadStep1";
import { IPayload } from "@/types/payload";

const payloadStart = new CallbackDataBuilder<IPayload.Start>("ready");
payloadStart.boolean("isReady");

export const payloadStartHandler = payloadStart.handle(async (ctx) => {
  if (!ctx.unpackedPayload.isReady) {
    return;
  }

  ctx.telegram.api.sendMessage({
    chat_id: ctx.senderId,
    text: prompts.ready.step1(ctx.from.firstName),
    reply_markup: InlineKeyboard.keyboard([
      InlineKeyboard.textButton({
        text: ctx.from.firstName,
        payload: payloadStep1.pack({
          name: ctx.from.firstName,
        }),
      }),
    ]),
  });

  ctx.message?.editMessageText(prompts.start.after, {
    reply_markup: InlineKeyboard.empty,
    parse_mode: "MarkdownV2",
  });

  ctx.answer();
});

export default payloadStart;
