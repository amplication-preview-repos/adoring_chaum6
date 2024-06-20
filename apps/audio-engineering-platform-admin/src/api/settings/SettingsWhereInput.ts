import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";

export type SettingsWhereInput = {
  configKey?: StringNullableFilter;
  configValue?: JsonFilter;
  id?: StringFilter;
};
