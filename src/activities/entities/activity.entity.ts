import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { Category } from '../../categories/entities/category.entity';
import { Order } from '../../orders/entities/order.entity';

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

  @Column()
  @Field(() => Int)
  categoryId: number;

  @ManyToOne(() => Category, (category) => category.activities, { eager: true })
  @Field(() => Category)
  category: Category;

  @OneToMany(() => Order, (order) => order.activity)
  @Field(() => [Order])
  orders: Order[];
}
