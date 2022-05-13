import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreatePaymentInput {
  @Field(() => String)
  method: string;
}
