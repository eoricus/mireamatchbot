import { prompts } from "@/utils/prompts";
import { CallbackDataBuilder } from "@puregram/callback-data";
import { InlineKeyboard } from "puregram";
import payloadStep3 from "./payloadStep3";
import { logToTg } from "@/logger";
import { user } from "./user";
import { IPayload } from "@/types/payload";

const payloadStep2 = new CallbackDataBuilder<IPayload.Step2>("step2");
payloadStep2.string("sex");

export const payloadStep2Handler = payloadStep2.handle(async (ctx) => {
  if (!ctx.unpackedPayload.sex) {
    return;
  }

  user.sex = ctx.unpackedPayload.sex;

  ctx.message?.editMessageText(prompts.ready.step3, {
    reply_markup: InlineKeyboard.keyboard([
      InlineKeyboard.textButton({
        text: "👹 Парней",
        payload: payloadStep3.pack({
          sexPreference: "m",
        }),
      }),
      InlineKeyboard.textButton({
        text: "😈 Девушек",
        payload: payloadStep3.pack({
          sexPreference: "w",
        }),
      }),
      InlineKeyboard.textButton({
        text: "🗿 Без разницы",
        payload: payloadStep3.pack({
          sexPreference: "*",
        }),
      }),
    ]),
  });

  ctx.answer();
});

export default payloadStep2;
