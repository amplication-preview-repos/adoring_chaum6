import { SortOrder } from "../../util/SortOrder";

export type AudioEffectOrderByInput = {
  createdAt?: SortOrder;
  effectName?: SortOrder;
  id?: SortOrder;
  settings?: SortOrder;
  updatedAt?: SortOrder;
};
