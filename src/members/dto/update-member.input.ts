import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateMemberInput } from './create-member.input';

@InputType()
export class UpdateMemberInput extends PartialType(CreateMemberInput) {
  @Field(() => Int)
  id: number;
}
