import { PartialType } from '@nestjs/swagger';
import { CreatePersonObjectDto } from './create-person-object.dto';

export class UpdatePersonObjectDto extends PartialType(CreatePersonObjectDto) {}
