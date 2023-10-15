import { Module } from '@nestjs/common';
import { InterfaceService } from './interface.service';
import { InterfaceController } from './interface.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Interface } from './entities/interface.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Interface])],
  controllers: [InterfaceController],
  providers: [InterfaceService],
  exports: [TypeOrmModule],
})
export class InterfaceModule {}
