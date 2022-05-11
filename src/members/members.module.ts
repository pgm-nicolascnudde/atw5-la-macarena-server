import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MembersService } from './members.service';
import { MembersResolver } from './members.resolver';
import { Member } from './entities/member.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Member])],
  providers: [MembersResolver, MembersService],
  exports: [MembersService],
})
export class MembersModule {}
