import { Project } from "../project/Project";

export type Asset = {
  createdAt: Date;
  id: string;
  name: string | null;
  project?: Project | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  url: string | null;
};
