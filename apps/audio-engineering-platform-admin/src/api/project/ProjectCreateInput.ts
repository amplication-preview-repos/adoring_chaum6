import { AssetCreateNestedManyWithoutProjectsInput } from "./AssetCreateNestedManyWithoutProjectsInput";
import { TaskCreateNestedManyWithoutProjectsInput } from "./TaskCreateNestedManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectCreateInput = {
  assets?: AssetCreateNestedManyWithoutProjectsInput;
  name?: string | null;
  status?: "Option1" | null;
  tasks?: TaskCreateNestedManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
