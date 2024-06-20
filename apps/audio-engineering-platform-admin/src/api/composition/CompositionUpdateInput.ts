import { AudioFileUpdateManyWithoutCompositionsInput } from "./AudioFileUpdateManyWithoutCompositionsInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CompositionUpdateInput = {
  audioFiles?: AudioFileUpdateManyWithoutCompositionsInput;
  description?: string | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
