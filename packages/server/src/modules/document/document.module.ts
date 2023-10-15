import { Module } from '@nestjs/common';
import { DocumentService } from './document.service';
import { DocumentController } from './document.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from '../user/user.module';
import { Document } from './entities/document.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Document]), UserModule, ConfigModule],
  controllers: [DocumentController],
  providers: [DocumentService],
  exports: [TypeOrmModule],
})
export class DocumentModule {}
