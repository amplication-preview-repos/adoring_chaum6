import { AudioProjectUpdateManyWithoutAppUsersInput } from "./AudioProjectUpdateManyWithoutAppUsersInput";

export type AppUserUpdateInput = {
  audioProjects?: AudioProjectUpdateManyWithoutAppUsersInput;
  email?: string | null;
  password?: string | null;
  role?: "Option1" | null;
  username?: string | null;
};
