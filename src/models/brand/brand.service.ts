import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';

@Injectable()
export class BrandService {
  constructor(
    @InjectRepository(Brand)
    private readonly brandRepository: Repository<Brand>,
  ) {}

  async create(createBrandDto: CreateBrandDto) {
    const car = this.brandRepository.create(createBrandDto);
    return await this.brandRepository.save(car);
  }

  async findAll() {
    return await this.brandRepository.find();
  }

  async findOne(id: number) {
    const brand = await this.brandRepository.findOne(id);
    if (!brand) throw new NotFoundException(`Brand ${id} not found`);
    return brand;
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    const brand = await this.brandRepository.preload({ id, ...updateBrandDto });
    if (!brand) throw new NotFoundException(`Brand ${id} not found`);
    return this.brandRepository.save(brand);
  }

  async remove(id: number) {
    const brand = await this.brandRepository.findOne(id);
    if (!brand) throw new NotFoundException(`Brand ${id} not found`);
    return this.brandRepository.remove(brand);
  }
}
