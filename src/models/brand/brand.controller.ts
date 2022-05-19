import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { BrandService } from './brand.service';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';

@Controller('brands')
export class BrandController {
  constructor(private readonly brandService: BrandService) {}

  @Post()
  @HttpCode(200)
  create(@Body() createBrandDto: CreateBrandDto) {
    return this.brandService.create(createBrandDto);
  }

  @Get()
  @HttpCode(200)
  findAll() {
    return this.brandService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.brandService.findOne(+id);
  }

  @Patch(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateBrandDto: UpdateBrandDto) {
    return this.brandService.update(+id, updateBrandDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.brandService.remove(+id);
  }
}
