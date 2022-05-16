import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { PersonObjectsService } from './person-objects.service';

@Controller('person-objects')
export class PersonObjectsController {
  constructor(private readonly personObjectsService: PersonObjectsService) {}

  @Get()
  @HttpCode(200)
  findAll() {
    return this.personObjectsService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.personObjectsService.findOne(+id);
  }
}
