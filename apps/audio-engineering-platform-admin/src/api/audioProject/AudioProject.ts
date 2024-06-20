import { AppUser } from "../appUser/AppUser";

export type AudioProject = {
  appUser?: AppUser | null;
  createdAt: Date;
  description: string | null;
  endDate: Date | null;
  id: string;
  startDate: Date | null;
  title: string | null;
  updatedAt: Date;
};
