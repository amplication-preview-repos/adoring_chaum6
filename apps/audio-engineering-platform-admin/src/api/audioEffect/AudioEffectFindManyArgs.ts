import { AudioEffectWhereInput } from "./AudioEffectWhereInput";
import { AudioEffectOrderByInput } from "./AudioEffectOrderByInput";

export type AudioEffectFindManyArgs = {
  where?: AudioEffectWhereInput;
  orderBy?: Array<AudioEffectOrderByInput>;
  skip?: number;
  take?: number;
};
