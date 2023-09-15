import { Module } from '@nestjs/common';
import { InterfaceService } from './interface.service';
import { InterfaceController } from './interface.controller';

@Module({
  controllers: [InterfaceController],
  providers: [InterfaceService],
})
export class InterfaceModule {}
