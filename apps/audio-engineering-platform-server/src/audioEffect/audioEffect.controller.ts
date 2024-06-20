import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioEffectService } from "./audioEffect.service";
import { AudioEffectControllerBase } from "./base/audioEffect.controller.base";

@swagger.ApiTags("audioEffects")
@common.Controller("audioEffects")
export class AudioEffectController extends AudioEffectControllerBase {
  constructor(protected readonly service: AudioEffectService) {
    super(service);
  }
}
