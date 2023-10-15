import { PartialType } from '@nestjs/swagger';
import { CreateInterfaceDto } from './create-interface.dto';

export class UpdateInterfaceDto extends PartialType(CreateInterfaceDto) {}
