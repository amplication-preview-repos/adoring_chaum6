import { SortOrder } from "../../util/SortOrder";

export type AssetOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  projectId?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
  url?: SortOrder;
};
