import { AudioEffect as TAudioEffect } from "../api/audioEffect/AudioEffect";

export const AUDIOEFFECT_TITLE_FIELD = "effectName";

export const AudioEffectTitle = (record: TAudioEffect): string => {
  return record.effectName?.toString() || String(record.id);
};
