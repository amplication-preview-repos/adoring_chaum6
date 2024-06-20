import { CompositionUpdateManyWithoutUsersInput } from "./CompositionUpdateManyWithoutUsersInput";
import { ProjectUpdateManyWithoutUsersInput } from "./ProjectUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskUpdateManyWithoutUsersInput } from "./TaskUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  compositions?: CompositionUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  projects?: ProjectUpdateManyWithoutUsersInput;
  roles?: InputJsonValue;
  tasks?: TaskUpdateManyWithoutUsersInput;
  username?: string;
};
