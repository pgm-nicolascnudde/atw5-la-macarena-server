import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

import { CreateActivityInput } from './create-activity.input';

@InputType()
export class UpdateActivityInput extends PartialType(CreateActivityInput) {
  @Field(() => Int)
  id: number;
}
