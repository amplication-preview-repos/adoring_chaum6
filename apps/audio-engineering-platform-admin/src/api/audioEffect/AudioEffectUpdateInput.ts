import { InputJsonValue } from "../../types";

export type AudioEffectUpdateInput = {
  effectName?: string | null;
  settings?: InputJsonValue;
};
