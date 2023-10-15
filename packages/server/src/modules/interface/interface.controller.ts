import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { InterfaceService } from './interface.service';
import { CreateInterfaceDto } from './dto/create-interface.dto';
import { UpdateInterfaceDto } from './dto/update-interface.dto';

@Controller('interface')
export class InterfaceController {
  constructor(private readonly interfaceService: InterfaceService) {}

  @Post()
  create(@Body() createInterfaceDto: CreateInterfaceDto) {
    return this.interfaceService.create(createInterfaceDto);
  }

  @Get()
  findAll() {
    return this.interfaceService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.interfaceService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInterfaceDto: UpdateInterfaceDto,
  ) {
    return this.interfaceService.update(+id, updateInterfaceDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.interfaceService.remove(+id);
  }
}
