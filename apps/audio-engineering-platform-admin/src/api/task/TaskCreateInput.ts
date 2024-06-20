import { ProjectWhereUniqueInput } from "../project/ProjectWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TaskCreateInput = {
  description?: string | null;
  project?: ProjectWhereUniqueInput | null;
  status?: "Option1" | null;
  title?: string | null;
  user?: UserWhereUniqueInput | null;
};
