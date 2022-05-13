import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateOrderInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => String)
  phone: string;

  @Field(() => String)
  email: string;
  
  @Field(() => Int)
  amount: number;

  @Field(() => String)
  status: string;
}
