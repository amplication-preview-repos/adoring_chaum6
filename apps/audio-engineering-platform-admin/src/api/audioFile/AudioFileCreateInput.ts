import { CompositionWhereUniqueInput } from "../composition/CompositionWhereUniqueInput";

export type AudioFileCreateInput = {
  composition?: CompositionWhereUniqueInput | null;
  fileName?: string | null;
  filePath?: string | null;
};
