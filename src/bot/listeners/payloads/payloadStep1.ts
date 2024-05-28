import { prompts } from "@/utils/prompts";
import { CallbackDataBuilder } from "@puregram/callback-data";
import payloadStep2 from "./payloadStep2";
import { InlineKeyboard } from "puregram";
import { user } from "./user";
import { IPayload } from "@/types/payload";

const payloadStep1 = new CallbackDataBuilder<IPayload.Step1>("step1");
payloadStep1.string("name");

export const payloadStep1Handler = payloadStep1.handle(async (ctx) => {
  if (!ctx.unpackedPayload.name) {
    return;
  }

  user.name = ctx.unpackedPayload.name

  ctx.message?.editMessageText(prompts.ready.step2, {
    reply_markup: InlineKeyboard.keyboard([
      InlineKeyboard.textButton({
        text: "🥸 Парень",
        payload: payloadStep2.pack({
          sex: "m",
        }),
      }),
      InlineKeyboard.textButton({
        text: "😽 Девушка",
        payload: payloadStep2.pack({
          sex: "w",
        }),
      }),
    ]),
  });

  ctx.answer();
});

export default payloadStep1;
