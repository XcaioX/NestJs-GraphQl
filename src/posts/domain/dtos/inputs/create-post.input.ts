import { Field, InputType } from '@nestjs/graphql'
import { IsNotEmpty, IsString } from 'class-validator'

@InputType()
export class CreatePostsInput {
    @Field()
    @IsNotEmpty()
    @IsString()
    title: string

    @Field()
    @IsNotEmpty()
    @IsString()
    body: string

}