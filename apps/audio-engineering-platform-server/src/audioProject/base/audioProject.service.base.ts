/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  AudioProject as PrismaAudioProject,
  AppUser as PrismaAppUser,
} from "@prisma/client";

export class AudioProjectServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AudioProjectCountArgs, "select">
  ): Promise<number> {
    return this.prisma.audioProject.count(args);
  }

  async audioProjects(
    args: Prisma.AudioProjectFindManyArgs
  ): Promise<PrismaAudioProject[]> {
    return this.prisma.audioProject.findMany(args);
  }
  async audioProject(
    args: Prisma.AudioProjectFindUniqueArgs
  ): Promise<PrismaAudioProject | null> {
    return this.prisma.audioProject.findUnique(args);
  }
  async createAudioProject(
    args: Prisma.AudioProjectCreateArgs
  ): Promise<PrismaAudioProject> {
    return this.prisma.audioProject.create(args);
  }
  async updateAudioProject(
    args: Prisma.AudioProjectUpdateArgs
  ): Promise<PrismaAudioProject> {
    return this.prisma.audioProject.update(args);
  }
  async deleteAudioProject(
    args: Prisma.AudioProjectDeleteArgs
  ): Promise<PrismaAudioProject> {
    return this.prisma.audioProject.delete(args);
  }

  async getAppUser(parentId: string): Promise<PrismaAppUser | null> {
    return this.prisma.audioProject
      .findUnique({
        where: { id: parentId },
      })
      .appUser();
  }
}
