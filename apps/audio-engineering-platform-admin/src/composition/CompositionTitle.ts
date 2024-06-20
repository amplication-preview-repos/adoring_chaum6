import { Composition as TComposition } from "../api/composition/Composition";

export const COMPOSITION_TITLE_FIELD = "title";

export const CompositionTitle = (record: TComposition): string => {
  return record.title?.toString() || String(record.id);
};
