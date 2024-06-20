import { Module } from "@nestjs/common";
import { AudioProjectModuleBase } from "./base/audioProject.module.base";
import { AudioProjectService } from "./audioProject.service";
import { AudioProjectController } from "./audioProject.controller";
import { AudioProjectResolver } from "./audioProject.resolver";

@Module({
  imports: [AudioProjectModuleBase],
  controllers: [AudioProjectController],
  providers: [AudioProjectService, AudioProjectResolver],
  exports: [AudioProjectService],
})
export class AudioProjectModule {}
