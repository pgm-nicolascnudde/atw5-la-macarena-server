import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMemberInput {
  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;

  @Field(() => Int)
  birthday: number;

  @Field(() => String)
  origin: string;

  @Field(() => String)
  picture: string;
}
