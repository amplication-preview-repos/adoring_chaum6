import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";

export type AudioProjectUpdateInput = {
  appUser?: AppUserWhereUniqueInput | null;
  description?: string | null;
  endDate?: Date | null;
  startDate?: Date | null;
  title?: string | null;
};
