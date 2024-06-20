import { SortOrder } from "../../util/SortOrder";

export type SettingsOrderByInput = {
  configKey?: SortOrder;
  configValue?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
