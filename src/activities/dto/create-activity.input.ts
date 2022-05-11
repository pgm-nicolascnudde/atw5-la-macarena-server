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

  @Field(() => Int)
  date: number;

  @Field(() => Int)
  slots: number;
}
