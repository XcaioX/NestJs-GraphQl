import { Resolver, Query, Args, Mutation } from "@nestjs/graphql";
import { GetPostArgs } from "./domain/dtos/args/get-post.args";
import { GetPostsArgs } from "./domain/dtos/args/get-posts.args";
import { CreatePostsInput } from "./domain/dtos/inputs/create-post.input";
import { DeletePostInput } from "./domain/dtos/inputs/delete-post.input";
import { updatePostInput } from "./domain/dtos/inputs/update-post.input";

import { Post } from "./domain/models/Post";
import { PostsService } from "./posts.service";

@Resolver(() => Post)
export class PostsResolver {
    constructor(
        private readonly postsService: PostsService
    ) {}

    @Query(() => Post, { name: 'post', nullable: false })
    getPost(@Args() payload: GetPostArgs): Post {
        return this.postsService.getPost(payload)
    }

    @Query(() => [Post], { name: 'posts', nullable: false })
    getPosts(): Post[] {
        return this.postsService.getPosts()
    }

    @Mutation(() => Post)
    createPost(@Args('createPostData') payload: CreatePostsInput): Post {
        return this.postsService.createPost(payload)
    }

    @Mutation(() => Post)
    updatePost(@Args('updatePostData') payload: updatePostInput): Post {
        return this.postsService.updatePost(payload)
    }

    @Mutation(() => Post)
    deletePost(@Args('deletePostData') payload: DeletePostInput): Post {
        return this.postsService.deletePost(payload)
    }
}