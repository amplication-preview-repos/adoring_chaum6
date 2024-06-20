import { AudioProject } from "../audioProject/AudioProject";

export type AppUser = {
  audioProjects?: Array<AudioProject>;
  createdAt: Date;
  email: string | null;
  id: string;
  password: string | null;
  role?: "Option1" | null;
  updatedAt: Date;
  username: string | null;
};
