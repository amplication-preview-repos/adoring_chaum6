import { Module } from "@nestjs/common";
import { ProjectModule } from "./project/project.module";
import { CompositionModule } from "./composition/composition.module";
import { SettingsModule } from "./settings/settings.module";
import { AudioFileModule } from "./audioFile/audioFile.module";
import { AudioEffectModule } from "./audioEffect/audioEffect.module";
import { UserModule } from "./user/user.module";
import { AssetModule } from "./asset/asset.module";
import { TaskModule } from "./task/task.module";
import { AppUserModule } from "./appUser/appUser.module";
import { AudioProjectModule } from "./audioProject/audioProject.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { StorageModule } from "./storage/storage.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    StorageModule,
    ProjectModule,
    CompositionModule,
    SettingsModule,
    AudioFileModule,
    AudioEffectModule,
    UserModule,
    AssetModule,
    TaskModule,
    AppUserModule,
    AudioProjectModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
  ],
  providers: [],
})
export class AppModule {}
