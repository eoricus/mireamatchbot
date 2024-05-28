import { prompts } from "@/utils/prompts";
import { CallbackDataBuilder } from "@puregram/callback-data";
import { InlineKeyboard } from "puregram";
import payloadStep4 from "./payloadStep4";
import { user } from "./user";
import { IPayload } from "@/types/payload";

const payloadStep3 = new CallbackDataBuilder<IPayload.Step3>("step3");
payloadStep3.string("sexPreference");

export const payloadStep3Handler = payloadStep3.handle(async (ctx) => {
  if (!ctx.unpackedPayload.sexPreference) {
    return;
  }

  user.sexPreference = ctx.unpackedPayload.sexPreference;


  // TO-DO: add change mode in config
  // ctx.telegram.api.sendMessage({
  //     chat_id: ctx.senderId,
  //     text: messages.ready.step2,
  //     reply_markup: callbackStep2.keyboardGetter({})
  // })

  ctx.message?.editMessageText(prompts.ready.step4(ctx.from.firstName), {
    reply_markup: InlineKeyboard.keyboard([
      InlineKeyboard.textButton({
        text: "👹 Остаться загадочным",
        payload: payloadStep4.pack({}),
      }),
    ]),
  });

  ctx.answer();
});

export default payloadStep3;
