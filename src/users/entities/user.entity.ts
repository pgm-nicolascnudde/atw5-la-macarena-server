import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  username: string;

  @Column('varchar', { length: 128, unique: true })
  @Field(() => String)
  email: string;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  password: string;
}
