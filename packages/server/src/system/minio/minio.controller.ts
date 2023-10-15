import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { MinioService } from './minio.service';
import { CreateMinioDto } from './dto/create-minio.dto';
import { UpdateMinioDto } from './dto/update-minio.dto';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('minio')
export class MinioController {
  constructor(private readonly minioService: MinioService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
  }

  @Post()
  create(@Body() createMinioDto: CreateMinioDto) {
    return this.minioService.create(createMinioDto);
  }

  @Get()
  findAll() {
    return this.minioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.minioService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMinioDto: UpdateMinioDto) {
    return this.minioService.update(+id, updateMinioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.minioService.remove(+id);
  }
}
