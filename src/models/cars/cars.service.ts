import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(Car) private readonly carRepository: Repository<Car>,
  ) {}

  async create(createCarDto: CreateCarDto) {
    const car = this.carRepository.create(createCarDto);
    return await this.carRepository.save(car);
  }

  async findAll() {
    return await this.carRepository.find();
  }

  async findOne(id: number) {
    const car = await this.carRepository.findOne(id);
    if (!car) throw new NotFoundException(`Car ${id} not found`);
    return car;
  }

  async update(id: number, updateCarDto: UpdateCarDto) {
    const car = await this.carRepository.preload({ id, ...updateCarDto });
    if (!car) throw new NotFoundException(`Car ${id} not found`);
    return this.carRepository.save(car);
  }

  async remove(id: number) {
    const car = await this.carRepository.findOne(id);
    if (!car) throw new NotFoundException(`Car ${id} not found`);
    return this.carRepository.remove(car);
  }
}
