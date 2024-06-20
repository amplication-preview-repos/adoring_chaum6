import { SortOrder } from "../../util/SortOrder";

export type TaskOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  projectId?: SortOrder;
  status?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
