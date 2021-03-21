import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Post {
    @Field({ nullable: false })
    id: string
    
    @Field({ nullable: false })
    title: string
    
    @Field({ nullable: false })
    body: string
}