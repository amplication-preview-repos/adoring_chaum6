import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  project?: ProjectWhereUniqueInput;
  status?: "Option1";
  title?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
