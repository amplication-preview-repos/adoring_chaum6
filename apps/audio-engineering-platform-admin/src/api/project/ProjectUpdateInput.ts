import { AssetUpdateManyWithoutProjectsInput } from "./AssetUpdateManyWithoutProjectsInput";
import { TaskUpdateManyWithoutProjectsInput } from "./TaskUpdateManyWithoutProjectsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ProjectUpdateInput = {
  assets?: AssetUpdateManyWithoutProjectsInput;
  name?: string | null;
  status?: "Option1" | null;
  tasks?: TaskUpdateManyWithoutProjectsInput;
  user?: UserWhereUniqueInput | null;
};
