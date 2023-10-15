import { Module } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { TeamsController } from './teams.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Team } from './entities/team.entity';
import { UserModule } from '../user/user.module';

@Module({
  imports: [TypeOrmModule.forFeature([Team]), UserModule],
  controllers: [TeamsController],
  providers: [TeamsService],
  exports: [TypeOrmModule],
})
export class TeamsModule {}
