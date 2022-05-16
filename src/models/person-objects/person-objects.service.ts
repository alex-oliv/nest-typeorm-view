import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PersonObject } from './entities/person-object.view.entity';

@Injectable()
export class PersonObjectsService {
  constructor(
    @InjectRepository(PersonObject)
    private readonly poRepository: Repository<PersonObject>,
  ) {}

  async findAll() {
    return await this.poRepository.find();
  }

  async findOne(id: number) {
    const po = await this.poRepository.findOne({ id });
    if (!po) throw new NotFoundException(`INFO ${id} not found`);
    return po;
  }
}
