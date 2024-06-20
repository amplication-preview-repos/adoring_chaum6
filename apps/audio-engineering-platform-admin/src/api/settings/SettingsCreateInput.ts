import { InputJsonValue } from "../../types";

export type SettingsCreateInput = {
  configKey?: string | null;
  configValue?: InputJsonValue;
};
