import { prompts } from "@/utils/prompts";
import { CallbackDataBuilder } from "@puregram/callback-data";
import { InlineKeyboard } from "puregram";
import { user } from "./user";
import { IPayload } from "@/types/payload";

const payloadStep4 = new CallbackDataBuilder<IPayload.Step4>("step4");
payloadStep4.string("aboutMe", { optional: true });

export const payloadStep4Handler = payloadStep4.handle(async (ctx) => {
  ctx.message?.delete();
  // if (!ctx.unpackedPayload.aboutMe) {
  //   ctx.message?.editMessageText("Круто! Ваша анкета будет записана, когда бот")
  // }
  user.aboutMe = ctx.unpackedPayload.aboutMe;
  ctx.telegram.api.sendMessage({
    chat_id: ctx.senderId,
    text: `Отлично! Мы записали информацию о вас, ${user.name}! \n\nВы ${
      user.sex == "m" ? "парень" : "девушка"
    } , который рассматривает для поиска ${
      user.sexPreference == "*"
        ? "всех"
        : user.sexPreference == "m"
        ? "парней"
        : "девушек"
    }. \n\nВот что вы рассказали о себе: ${
      user.aboutMe || "вы выбрали быть загадочным"
    }`,
  });
});

export default payloadStep4;
