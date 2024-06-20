import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AudioProjectService } from "./audioProject.service";
import { AudioProjectControllerBase } from "./base/audioProject.controller.base";

@swagger.ApiTags("audioProjects")
@common.Controller("audioProjects")
export class AudioProjectController extends AudioProjectControllerBase {
  constructor(protected readonly service: AudioProjectService) {
    super(service);
  }
}
