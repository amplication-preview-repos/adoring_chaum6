import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { CompositionService } from "./composition.service";
import { CompositionControllerBase } from "./base/composition.controller.base";

@swagger.ApiTags("compositions")
@common.Controller("compositions")
export class CompositionController extends CompositionControllerBase {
  constructor(protected readonly service: CompositionService) {
    super(service);
  }
}
