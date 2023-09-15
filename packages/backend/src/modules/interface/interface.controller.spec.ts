import { Test, TestingModule } from '@nestjs/testing';
import { InterfaceController } from './interface.controller';
import { InterfaceService } from './interface.service';

describe('InterfaceController', () => {
  let controller: InterfaceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InterfaceController],
      providers: [InterfaceService],
    }).compile();

    controller = module.get<InterfaceController>(InterfaceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
