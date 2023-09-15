import { Module } from '@nestjs/common';
import { MinioService } from './minio.service';
import { MinioController } from './minio.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Minio } from './entities/minio.entity';

@Module({
  imports: [ConfigModule, TypeOrmModule.forFeature([Minio])],
  controllers: [MinioController],
  providers: [MinioService],
  exports: [TypeOrmModule],
})
export class MinioModule {}
