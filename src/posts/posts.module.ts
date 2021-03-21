import { Module } from "@nestjs/common";

import { PostsResolver } from "./posts.resolver";
import { PostsService } from "./posts.service";

@Module({
    imports: [],
    controllers: [],
    providers: [PostsService, PostsResolver]
})
export class PostModule {}