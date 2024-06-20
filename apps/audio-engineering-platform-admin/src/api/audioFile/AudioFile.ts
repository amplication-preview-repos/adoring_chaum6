import { Composition } from "../composition/Composition";

export type AudioFile = {
  composition?: Composition | null;
  createdAt: Date;
  fileName: string | null;
  filePath: string | null;
  id: string;
  updatedAt: Date;
};
