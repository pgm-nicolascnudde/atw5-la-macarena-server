import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Member {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  firstName: string;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  lastName: string;

  @Column()
  @Field(() => Int)
  birthday: number;

  @Column('varchar', { length: 32 })
  @Field(() => String)
  origin: string;

  @Column('varchar', { length: 256 })
  @Field(() => String)
  picture: string;
}
