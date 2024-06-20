import * as graphql from "@nestjs/graphql";
import { AudioEffectResolverBase } from "./base/audioEffect.resolver.base";
import { AudioEffect } from "./base/AudioEffect";
import { AudioEffectService } from "./audioEffect.service";

@graphql.Resolver(() => AudioEffect)
export class AudioEffectResolver extends AudioEffectResolverBase {
  constructor(protected readonly service: AudioEffectService) {
    super(service);
  }
}
