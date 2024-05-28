import { Telegram } from "puregram";
import { payloadHandlers } from "./payloads";

export const setCallbackListener = (telegram: Telegram): void => {
  payloadHandlers.forEach((payloadHandler) => {
    telegram.updates.use(payloadHandler);
  });
};
