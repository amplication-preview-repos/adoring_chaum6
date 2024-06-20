import { AssetListRelationFilter } from "../asset/AssetListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { TaskListRelationFilter } from "../task/TaskListRelationFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectWhereInput = {
  assets?: AssetListRelationFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  status?: "Option1";
  tasks?: TaskListRelationFilter;
  user?: UserWhereUniqueInput;
};
