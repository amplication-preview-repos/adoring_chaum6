import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { AppUserService } from "./appUser.service";
import { AppUserControllerBase } from "./base/appUser.controller.base";

@swagger.ApiTags("appUsers")
@common.Controller("appUsers")
export class AppUserController extends AppUserControllerBase {
  constructor(protected readonly service: AppUserService) {
    super(service);
  }
}
