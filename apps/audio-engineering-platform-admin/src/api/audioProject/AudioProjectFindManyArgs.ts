import { AudioProjectWhereInput } from "./AudioProjectWhereInput";
import { AudioProjectOrderByInput } from "./AudioProjectOrderByInput";

export type AudioProjectFindManyArgs = {
  where?: AudioProjectWhereInput;
  orderBy?: Array<AudioProjectOrderByInput>;
  skip?: number;
  take?: number;
};
