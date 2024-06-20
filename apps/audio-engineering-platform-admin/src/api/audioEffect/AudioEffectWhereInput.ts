import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";

export type AudioEffectWhereInput = {
  effectName?: StringNullableFilter;
  id?: StringFilter;
  settings?: JsonFilter;
};
