import { AudioProjectCreateNestedManyWithoutAppUsersInput } from "./AudioProjectCreateNestedManyWithoutAppUsersInput";

export type AppUserCreateInput = {
  audioProjects?: AudioProjectCreateNestedManyWithoutAppUsersInput;
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
  username?: string | null;
};
