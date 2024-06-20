import { InputJsonValue } from "../../types";

export type SettingsUpdateInput = {
  configKey?: string | null;
  configValue?: InputJsonValue;
};
