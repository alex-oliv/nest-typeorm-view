import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return user;
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.userRepository.create(createUserDto);
    return await this.userRepository.save(user);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.preload({ id, ...updateUserDto });
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return this.userRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.userRepository.findOne(id);
    if (!user) throw new NotFoundException(`User ${id} not found`);
    return this.userRepository.remove(user);
  }

  async findByEmail(email: string) {
    return await this.userRepository.findOne({ email });
  }

  async findByUsername(username: string) {
    return await this.userRepository.findOne({ username });
  }
}
