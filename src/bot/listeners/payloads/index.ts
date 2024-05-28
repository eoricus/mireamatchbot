import payloadStart, { payloadStartHandler } from "./payloadStart";
import payloadStep1, { payloadStep1Handler } from "./payloadStep1";
import payloadStep2, { payloadStep2Handler } from "./payloadStep2";
import payloadStep3, { payloadStep3Handler } from "./payloadStep3";
import { payloadStep4Handler } from "./payloadStep4";

export const payloadHandlers = [
  payloadStartHandler,
  payloadStep1Handler,
  payloadStep2Handler,
  payloadStep3Handler,
  payloadStep4Handler,
];
