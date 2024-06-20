import { JsonValue } from "type-fest";

export type Settings = {
  configKey: string | null;
  configValue: JsonValue;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
