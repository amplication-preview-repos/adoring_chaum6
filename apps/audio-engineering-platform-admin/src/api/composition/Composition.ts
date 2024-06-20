import { AudioFile } from "../audioFile/AudioFile";
import { User } from "../user/User";

export type Composition = {
  audioFiles?: Array<AudioFile>;
  createdAt: Date;
  description: string | null;
  id: string;
  title: string | null;
  updatedAt: Date;
  user?: User | null;
};
