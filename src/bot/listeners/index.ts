import { Telegram } from "puregram";
import { setMessageListener } from "./setMessageListener";
import { setCallbackListener } from "./setCallbackListener";

export const setListeners = async (telegram: Telegram) => {
  setMessageListener(telegram);

  setCallbackListener(telegram);

  // cmd.setInlineListener(telegram);
};
