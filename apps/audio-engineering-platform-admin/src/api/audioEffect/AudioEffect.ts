import { JsonValue } from "type-fest";

export type AudioEffect = {
  createdAt: Date;
  effectName: string | null;
  id: string;
  settings: JsonValue;
  updatedAt: Date;
};
