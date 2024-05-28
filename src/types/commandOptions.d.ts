import { MessageContext } from "puregram";

export interface CommandOptions {
  name: string;
  handler: (ctx: MessageContext) => void;
  payload: CallbackDataBuilder;
  replyMarkup?: Keyboard;
  callbackHandler?: (ctx: Context) => void;
}
