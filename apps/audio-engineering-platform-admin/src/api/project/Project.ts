import { Asset } from "../asset/Asset";
import { Task } from "../task/Task";
import { User } from "../user/User";

export type Project = {
  assets?: Array<Asset>;
  createdAt: Date;
  id: string;
  name: string | null;
  status?: "Option1" | null;
  tasks?: Array<Task>;
  updatedAt: Date;
  user?: User | null;
};
