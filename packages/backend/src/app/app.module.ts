import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TeamsModule } from '../modules/teams/teams.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MinioModule } from '../system/minio/minio.module';
import type { RedisClientOptions } from 'redis';
import configuration from './config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { AuthModule } from '../system/auth/auth.module';
import { UserModule } from '../modules/user/user.module';
import { HealthController } from '../system/health/health.controller';
import { TypeOrmConfigService } from './config/typeorm.config.service';
import { WorkspaceModule } from '../modules/workspace/workspace.module';
import { CacheModule } from '@nestjs/cache-manager';
import { redisStore } from 'cache-manager-redis-yet';
import { ThrottlerModule } from '@nestjs/throttler';
import { InterfaceModule } from '../modules/interface/interface.module';
import { DocumentModule } from '../modules/document/document.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwt.constants';

const nestModules = [
  ConfigModule.forRoot({
    load: [configuration],
    cache: true,
    isGlobal: true,
  }),
  EventEmitterModule.forRoot(),
  ScheduleModule.forRoot(),
  TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useClass: TypeOrmConfigService,
  }),
  CacheModule.register<RedisClientOptions>({
    store: redisStore,
  }),
  JwtModule.register({
    global: true,
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),
  ThrottlerModule.forRoot([
    {
      ttl: 60000,
      limit: 10,
    },
  ]),
];

const businessModules = [
  TeamsModule,
  MinioModule,
  AuthModule,
  UserModule,
  WorkspaceModule,
  InterfaceModule,
  DocumentModule,
];

@Module({
  imports: [...nestModules, ...businessModules],
  controllers: [HealthController],
  providers: [AppService],
})
export class AppModule {}
