import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";

export type AssetCreateInput = {
  name?: string | null;
  project?: ProjectWhereUniqueInput | null;
  typeField?: "Option1" | null;
  url?: string | null;
};
