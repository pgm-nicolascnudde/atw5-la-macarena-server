import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Activity } from 'src/activities/entities/activity.entity';

@Entity()
@ObjectType()
export class Category {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 32, unique: true })
  @Field(() => String)
  title: string;

  @Column('varchar', { length: 1024 })
  @Field(() => String)
  description: string;

  @Column('varchar', { length: 256 })
  @Field(() => String)
  image: string;

  @OneToMany(() => Activity, (activity) => activity.category)
  @Field(() => [Activity])
  activities: Activity[];
}
