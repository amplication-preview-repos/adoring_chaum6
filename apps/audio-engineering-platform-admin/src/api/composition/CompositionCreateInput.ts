import { AudioFileCreateNestedManyWithoutCompositionsInput } from "./AudioFileCreateNestedManyWithoutCompositionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompositionCreateInput = {
  audioFiles?: AudioFileCreateNestedManyWithoutCompositionsInput;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
