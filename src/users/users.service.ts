import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>,
  ) {}

  async create(createUserInput: CreateUserInput): Promise<User> {
    const user = this.usersRepository.create(createUserInput);
    return await this.usersRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    return await this.usersRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserInput: UpdateUserInput): Promise<User> {
    const user = await this.usersRepository.preload({
      id: id,
      ...updateUserInput,
    });

    if (!user) {
      throw new NotFoundException(`User with #${id} not found`);
    }

    return this.usersRepository.save(user);
  }

  async remove(id: number): Promise<User> {
    const user = await this.findOne(id);
    await this.usersRepository.remove(user);

    return { id: id, username: '', email: '', password: '' };
  }
}
