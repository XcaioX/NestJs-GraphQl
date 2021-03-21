import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsOptional, IsString } from "class-validator";

@InputType()
export class updatePostInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    id: string

    @IsOptional()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    body: string
}