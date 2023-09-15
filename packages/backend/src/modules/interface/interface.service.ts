import { Injectable } from '@nestjs/common';
import { CreateInterfaceDto } from './dto/create-interface.dto';
import { UpdateInterfaceDto } from './dto/update-interface.dto';

@Injectable()
export class InterfaceService {
  create(createInterfaceDto: CreateInterfaceDto) {
    return 'This action adds a new interface';
  }

  findAll() {
    return `This action returns all interface`;
  }

  findOne(id: number) {
    return `This action returns a #${id} interface`;
  }

  update(id: number, updateInterfaceDto: UpdateInterfaceDto) {
    return `This action updates a #${id} interface`;
  }

  remove(id: number) {
    return `This action removes a #${id} interface`;
  }
}
