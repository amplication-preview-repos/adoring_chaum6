import { CompositionWhereInput } from "./CompositionWhereInput";
import { CompositionOrderByInput } from "./CompositionOrderByInput";

export type CompositionFindManyArgs = {
  where?: CompositionWhereInput;
  orderBy?: Array<CompositionOrderByInput>;
  skip?: number;
  take?: number;
};
