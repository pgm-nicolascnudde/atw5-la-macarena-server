import { InputType, Field, Int } from '@nestjs/graphql';

@InputType()
export class CreateActivityInput {
  @Field(() => String)
  title: string;

  @Field(() => String)
  description: string;

  @Field(() => String)
  image: string;

  @Field(() => Int)
  price: number;

  @Field(() => Boolean)
  multipleDays: boolean;

  @Field(() => Date, { nullable: true })
  date: Date;

  @Field(() => Date, { nullable: true })
  fromDate: Date;

  @Field(() => Date, { nullable: true })
  toDate: Date;

  @Field(() => Int)
  slots: number;
}
