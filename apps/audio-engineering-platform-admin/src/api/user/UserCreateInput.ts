import { CompositionCreateNestedManyWithoutUsersInput } from "./CompositionCreateNestedManyWithoutUsersInput";
import { ProjectCreateNestedManyWithoutUsersInput } from "./ProjectCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TaskCreateNestedManyWithoutUsersInput } from "./TaskCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  compositions?: CompositionCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  projects?: ProjectCreateNestedManyWithoutUsersInput;
  roles: InputJsonValue;
  tasks?: TaskCreateNestedManyWithoutUsersInput;
  username: string;
};
