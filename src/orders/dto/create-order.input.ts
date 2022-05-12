import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Int)
  phone: number;

  @Field(() => String)
  email: string;
  
  @Field(() => Int)
  amount: number;

  @Field(() => String)
  status: string;
}
