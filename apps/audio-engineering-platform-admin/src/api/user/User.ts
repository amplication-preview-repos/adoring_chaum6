import { Composition } from "../composition/Composition";
import { Project } from "../project/Project";
import { JsonValue } from "type-fest";
import { Task } from "../task/Task";

export type User = {
  compositions?: Array<Composition>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  projects?: Array<Project>;
  roles: JsonValue;
  tasks?: Array<Task>;
  updatedAt: Date;
  username: string;
};
