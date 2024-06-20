import * as graphql from "@nestjs/graphql";
import { AudioProjectResolverBase } from "./base/audioProject.resolver.base";
import { AudioProject } from "./base/AudioProject";
import { AudioProjectService } from "./audioProject.service";

@graphql.Resolver(() => AudioProject)
export class AudioProjectResolver extends AudioProjectResolverBase {
  constructor(protected readonly service: AudioProjectService) {
    super(service);
  }
}
