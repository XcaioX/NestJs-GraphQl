import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";

import { PostModule } from "./posts/posts.module";

@Module({
    imports: [
        GraphQLModule.forRoot({
            autoSchemaFile: true
        }),
        PostModule
    ],
})
export class AppModule {}