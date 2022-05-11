import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}
