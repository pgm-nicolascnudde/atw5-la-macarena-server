import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Activity {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column('varchar', { length: 32 })
  @Field(() => String)
  title: string;

  @Column('varchar', { length: 1024 })
  @Field(() => String)
  description: string;

  @Column('varchar', { length: 256 })
  @Field(() => String)
  image: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Boolean)
  multipleDays: boolean;

  @Column({ type: 'timestamptz', nullable: true })
  @Field(() => Date, { nullable: true })
  date: Date;

  @Column({ type: 'timestamptz', nullable: true })
  @Field(() => Date, { nullable: true })
  fromDate: Date;

  @Column({ type: 'timestamptz', nullable: true })
  @Field(() => Date, { nullable: true })
  toDate: Date;

  @Column()
  @Field(() => Int)
  slots: number;
}
