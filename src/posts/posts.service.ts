import { Injectable } from "@nestjs/common";
import { v4 as uuidv4 } from 'uuid'
import { GetPostArgs } from "./domain/dtos/args/get-post.args";
import { CreatePostsInput } from "./domain/dtos/inputs/create-post.input";
import { DeletePostInput } from "./domain/dtos/inputs/delete-post.input";
import { updatePostInput } from "./domain/dtos/inputs/update-post.input";

import { Post } from "./domain/models/Post"

@Injectable()
export class PostsService {
    private posts: Post[] = []

    createPost(payload: CreatePostsInput): Post {
        const post: Post = {
            id: uuidv4(),
            ...payload
        }

        this.posts.push(post)

        return post
    }

    updatePost(payload: updatePostInput): Post {
        const post = this.posts.find(post => post.id === payload.id)

        Object.assign(post, payload)

        return post
    }

    getPost(payload: GetPostArgs): Post {
        return this.posts.find(post => post.id === payload.id)
    }

    getPosts(): Post[] {
        return this.posts.map(post => this.getPost({ id: post.id }))
    }

    deletePost(payload: DeletePostInput): Post {
        const userIndex = this.posts.findIndex(user => user.id === payload.id)

        const user = this.posts[userIndex]

        this.posts.splice(userIndex)

        return user
    }

}