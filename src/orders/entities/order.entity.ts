import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

import { Activity } from '../../activities/entities/activity.entity';

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

  @Column('varchar', { length: 32 })
  @Field(() => String)
  phone: string;

  @Column('varchar', { length: 64 })
  @Field(() => String)
  email: string;

  @Column('int')
  @Field(() => Int)
  amount: number;

  @Column('varchar', { length: 32 })
  @Field(() => String)
  status: string;

  @Column('int')
  @Field(() => Int)
  activityId: number;

  @ManyToOne(() => Activity, (activity) => activity.orders, { eager: true })
  @Field(() => Activity)
  activity: Activity;
}
