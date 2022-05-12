import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Res,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  @HttpCode(200)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @HttpCode(200)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Post()
  @HttpCode(200)
  async create(@Res() res: Response, @Body() createUserDto: CreateUserDto) {
    const { username, email } = createUserDto;

    const emailExists = await this.usersService.findByUsername(email);
    if (emailExists)
      return res.status(403).json({ message: 'Email has already been used.' });

    const usernameExists = await this.usersService.findByUsername(username);
    if (usernameExists)
      return res
        .status(403)
        .json({ message: 'Username has already been used.' });

    return await this.usersService.create(createUserDto);
  }

  @Patch(':id')
  @HttpCode(204)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @HttpCode(204)
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
