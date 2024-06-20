import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AudioEffectServiceBase } from "./base/audioEffect.service.base";

@Injectable()
export class AudioEffectService extends AudioEffectServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
