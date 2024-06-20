import { Settings as TSettings } from "../api/settings/Settings";

export const SETTINGS_TITLE_FIELD = "configKey";

export const SettingsTitle = (record: TSettings): string => {
  return record.configKey?.toString() || String(record.id);
};
