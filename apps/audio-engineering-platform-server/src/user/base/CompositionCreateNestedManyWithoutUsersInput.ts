/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CompositionWhereUniqueInput } from "../../composition/base/CompositionWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CompositionCreateNestedManyWithoutUsersInput {
  @Field(() => [CompositionWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CompositionWhereUniqueInput],
  })
  connect?: Array<CompositionWhereUniqueInput>;
}

export { CompositionCreateNestedManyWithoutUsersInput as CompositionCreateNestedManyWithoutUsersInput };
