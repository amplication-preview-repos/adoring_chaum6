import { InputJsonValue } from "../../types";

export type AudioEffectCreateInput = {
  effectName?: string | null;
  settings?: InputJsonValue;
};
