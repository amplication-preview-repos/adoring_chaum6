import { Module } from "@nestjs/common";
import { AudioEffectModuleBase } from "./base/audioEffect.module.base";
import { AudioEffectService } from "./audioEffect.service";
import { AudioEffectController } from "./audioEffect.controller";
import { AudioEffectResolver } from "./audioEffect.resolver";

@Module({
  imports: [AudioEffectModuleBase],
  controllers: [AudioEffectController],
  providers: [AudioEffectService, AudioEffectResolver],
  exports: [AudioEffectService],
})
export class AudioEffectModule {}
