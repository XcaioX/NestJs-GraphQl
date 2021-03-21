import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetPostsArgs {
    @Field()
    @IsNotEmpty()
    id: string
}