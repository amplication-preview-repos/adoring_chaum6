import { AudioProject as TAudioProject } from "../api/audioProject/AudioProject";

export const AUDIOPROJECT_TITLE_FIELD = "title";

export const AudioProjectTitle = (record: TAudioProject): string => {
  return record.title?.toString() || String(record.id);
};
