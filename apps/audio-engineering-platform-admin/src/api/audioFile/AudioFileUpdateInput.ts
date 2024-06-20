import { CompositionWhereUniqueInput } from "../composition/CompositionWhereUniqueInput";

export type AudioFileUpdateInput = {
  composition?: CompositionWhereUniqueInput | null;
  fileName?: string | null;
  filePath?: string | null;
};
