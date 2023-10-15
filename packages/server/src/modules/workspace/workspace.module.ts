import { Module } from '@nestjs/common';
import { WorkspaceService } from './workspace.service';
import { WorkspaceController } from './workspace.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Workspace } from './entities/workspace.entity';
import { UserModule } from '../user/user.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [TypeOrmModule.forFeature([Workspace]), UserModule, ConfigModule],
  controllers: [WorkspaceController],
  providers: [WorkspaceService],
  exports: [TypeOrmModule],
})
export class WorkspaceModule {}
