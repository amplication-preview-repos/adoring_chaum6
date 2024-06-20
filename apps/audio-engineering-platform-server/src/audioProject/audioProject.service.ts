import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioProjectServiceBase } from "./base/audioProject.service.base";

@Injectable()
export class AudioProjectService extends AudioProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
