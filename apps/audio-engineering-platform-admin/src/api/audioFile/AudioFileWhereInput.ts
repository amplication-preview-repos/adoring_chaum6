import { CompositionWhereUniqueInput } from "../composition/CompositionWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AudioFileWhereInput = {
  composition?: CompositionWhereUniqueInput;
  fileName?: StringNullableFilter;
  filePath?: StringNullableFilter;
  id?: StringFilter;
};
