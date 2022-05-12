import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Order {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  firstName: string;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  lastName: string;

  @Column('int')
  @Field(() => Int)
  phone: number;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  email: string;

  @Column('int')
  @Field(() => Int)
  amount: number;

  @Column('varchar', { length: 32 })
  @Field(() => String)
  status: string;
}
