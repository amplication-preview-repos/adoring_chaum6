import { AudioProjectListRelationFilter } from "../audioProject/AudioProjectListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AppUserWhereInput = {
  audioProjects?: AudioProjectListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  password?: StringNullableFilter;
  role?: "Option1";
  username?: StringNullableFilter;
};
