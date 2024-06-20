/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { CompositionService } from "../composition.service";
import { CompositionCreateInput } from "./CompositionCreateInput";
import { Composition } from "./Composition";
import { CompositionFindManyArgs } from "./CompositionFindManyArgs";
import { CompositionWhereUniqueInput } from "./CompositionWhereUniqueInput";
import { CompositionUpdateInput } from "./CompositionUpdateInput";
import { AudioFileFindManyArgs } from "../../audioFile/base/AudioFileFindManyArgs";
import { AudioFile } from "../../audioFile/base/AudioFile";
import { AudioFileWhereUniqueInput } from "../../audioFile/base/AudioFileWhereUniqueInput";

export class CompositionControllerBase {
  constructor(protected readonly service: CompositionService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Composition })
  async createComposition(
    @common.Body() data: CompositionCreateInput
  ): Promise<Composition> {
    return await this.service.createComposition({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Composition] })
  @ApiNestedQuery(CompositionFindManyArgs)
  async compositions(@common.Req() request: Request): Promise<Composition[]> {
    const args = plainToClass(CompositionFindManyArgs, request.query);
    return this.service.compositions({
      ...args,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Composition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async composition(
    @common.Param() params: CompositionWhereUniqueInput
  ): Promise<Composition | null> {
    const result = await this.service.composition({
      where: params,
      select: {
        createdAt: true,
        description: true,
        id: true,
        title: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Composition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateComposition(
    @common.Param() params: CompositionWhereUniqueInput,
    @common.Body() data: CompositionUpdateInput
  ): Promise<Composition | null> {
    try {
      return await this.service.updateComposition({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Composition })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteComposition(
    @common.Param() params: CompositionWhereUniqueInput
  ): Promise<Composition | null> {
    try {
      return await this.service.deleteComposition({
        where: params,
        select: {
          createdAt: true,
          description: true,
          id: true,
          title: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/audioFiles")
  @ApiNestedQuery(AudioFileFindManyArgs)
  async findAudioFiles(
    @common.Req() request: Request,
    @common.Param() params: CompositionWhereUniqueInput
  ): Promise<AudioFile[]> {
    const query = plainToClass(AudioFileFindManyArgs, request.query);
    const results = await this.service.findAudioFiles(params.id, {
      ...query,
      select: {
        composition: {
          select: {
            id: true,
          },
        },

        createdAt: true,
        fileName: true,
        filePath: true,
        id: true,
        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/audioFiles")
  async connectAudioFiles(
    @common.Param() params: CompositionWhereUniqueInput,
    @common.Body() body: AudioFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      audioFiles: {
        connect: body,
      },
    };
    await this.service.updateComposition({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/audioFiles")
  async updateAudioFiles(
    @common.Param() params: CompositionWhereUniqueInput,
    @common.Body() body: AudioFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      audioFiles: {
        set: body,
      },
    };
    await this.service.updateComposition({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/audioFiles")
  async disconnectAudioFiles(
    @common.Param() params: CompositionWhereUniqueInput,
    @common.Body() body: AudioFileWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      audioFiles: {
        disconnect: body,
      },
    };
    await this.service.updateComposition({
      where: params,
      data,
      select: { id: true },
    });
  }
}
