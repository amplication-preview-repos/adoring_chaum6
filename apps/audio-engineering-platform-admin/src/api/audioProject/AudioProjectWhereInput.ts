import { AppUserWhereUniqueInput } from "../appUser/AppUserWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AudioProjectWhereInput = {
  appUser?: AppUserWhereUniqueInput;
  description?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  startDate?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
