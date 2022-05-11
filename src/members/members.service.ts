import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateMemberInput } from './dto/create-member.input';
import { UpdateMemberInput } from './dto/update-member.input';
import { Member } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectRepository(Member) private membersRepository: Repository<Member>,
  ) {}

  async create(createMemberInput: CreateMemberInput): Promise<Member> {
    const member = this.membersRepository.create(createMemberInput);
    return await this.membersRepository.save(member);
  }

  async findAll(): Promise<Member[]> {
    return await this.membersRepository.find();
  }

  async findOne(id: number): Promise<Member> {
    return await this.membersRepository.findOne({ where: { id } });
  }

  async update(
    id: number,
    updateMemberInput: UpdateMemberInput,
  ): Promise<Member> {
    const member = await this.membersRepository.preload({
      id: id,
      ...updateMemberInput,
    });

    if (!member) {
      throw new NotFoundException(`Member with #${id} not found`);
    }

    return this.membersRepository.save(member);
  }

  async remove(id: number): Promise<Member> {
    const member = await this.findOne(id);
    await this.membersRepository.remove(member);

    return {
      id: id,
      firstName: '',
      lastName: '',
      birthday: 0,
      origin: '',
      picture: '',
    };
  }
}
