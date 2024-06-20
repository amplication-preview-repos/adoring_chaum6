import { SortOrder } from "../../util/SortOrder";

export type AudioFileOrderByInput = {
  compositionId?: SortOrder;
  createdAt?: SortOrder;
  fileName?: SortOrder;
  filePath?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
