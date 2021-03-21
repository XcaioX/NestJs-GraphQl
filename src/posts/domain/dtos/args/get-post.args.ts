import { ArgsType, Field } from "@nestjs/graphql";
import { IsNotEmpty } from "class-validator";

@ArgsType()
export class GetPostArgs {
    @Field()
    @IsNotEmpty()
    id: string
}